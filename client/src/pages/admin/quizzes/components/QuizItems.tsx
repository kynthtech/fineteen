import DropdownMenuView from "@components/interfaces/DropdownMenu";
import { Badge } from "@radix-ui/themes";
import { getDifficultyColor } from "@utils/colors/getDifficultyColor";
import { getStatusColor } from "@utils/colors/getStatusColor";
import { useContext, useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { MdAccessTime, MdDelete, MdEdit, MdError } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { useNavigate, useRevalidator, useSearchParams } from "react-router";
import { QuizzesStates } from "../context";
import ActionModal from "@components/interfaces/ActionModal";
import { toast } from "@functions/toast/toast";
import useQuizApi from "@hooks/api/admin/useQuiz.api";
import Pagination from "@components/interfaces/Pagination";
import ItemsNotFound from "@components/others/ItemsNotFound";

function QuizItems() {
  const navigate = useNavigate();
  const { deleteQuiz } = useQuizApi();
  const { revalidate } = useRevalidator();
  const { data } = useContext(QuizzesStates);
  const [pageParam, setPageParam] = useSearchParams({ page: "1" });
  const [openDeleteDialog, setOpenDeleteDialog] = useState({
    visible: false,
    id: "",
  });

  const handleEditQuiz = (id: string) => {
    navigate(`/admin/quizzes/edit/${id}`);
  };

  const handleDeleteCourse = () => {
    toast.processing(deleteQuiz(openDeleteDialog.id), {
      loadingText: "Deleting quiz..",
      successText: () => {
        revalidate();
        setOpenDeleteDialog({ visible: false, id: "" });
        return "Quiz deleted successfully";
      },
      errorText: (response) => response.data.error,
    });
  };

  return (
    <div className="flex-1 space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        {data.quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-start justify-between pb-3">
              <div className="flex-1">
                <div className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.title}
                </div>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                  {quiz.description}
                </p>
                <div className="mb-2 flex items-center gap-2">
                  <Badge
                    size={"2"}
                    className="capitalize"
                    color={getStatusColor(quiz.visibility)}
                  >
                    {quiz.visibility}
                  </Badge>
                  <Badge
                    size={"2"}
                    className="capitalize"
                    color={getDifficultyColor(quiz.difficulty)}
                  >
                    {quiz.difficulty}
                  </Badge>
                  {Number(quiz.passingScore) < 60 && (
                    <Badge size={"2"} color="red">
                      <MdError className="mr-1 h-3 w-3" />
                      Low Pass Rate
                    </Badge>
                  )}
                </div>
              </div>
              <DropdownMenuView
                options={[
                  {
                    label: "Participant Results",
                    icon: SiSimpleanalytics,
                    onClick: () =>
                      navigate(`/admin/quizzes/${quiz._id}/participants`),
                  },
                  {
                    label: "Edit Quiz",
                    icon: MdEdit,
                    onClick: () => handleEditQuiz(quiz._id?.toString() || ""),
                  },
                  {
                    label: "Delete Quiz",
                    icon: MdDelete,
                    color: "red" as const,
                    onClick: () =>
                      setOpenDeleteDialog({
                        visible: true,
                        id: quiz._id || "",
                      }),
                  },
                ]}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <BsQuestionCircle className="h-4 w-4" />
                  <span>{quiz.questionsLength} questions</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="h-4 w-4" />
                  <span>{quiz.timeLimit} min</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {quiz.assignedGroups.map((group) => (
                  <Badge key={group} variant="outline" size={"2"}>
                    {group}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.quizzes.length == 0 && (
        <ItemsNotFound
          type="quiz-admin"
          title="No Quizzes"
          className="h-full"
          buttonText="Create Quiz"
          buttonLink="/admin/quizzes/create"
        />
      )}
      <Pagination
        length={data.totalQuizzes}
        setPage={setPageParam}
        page={pageParam}
      />
      {openDeleteDialog.visible && (
        <ActionModal
          description="Are you sure you want to delete this quiz?"
          no={() => setOpenDeleteDialog({ visible: false, id: "" })}
          yes={handleDeleteCourse}
          title="Delete Quiz"
          yesColor="red"
          yesText="Delete"
        />
      )}
    </div>
  );
}

export default QuizItems;
