import { Link, useSearchParams } from "react-router";
import { MdLock, MdPerson, MdAccessTime } from "react-icons/md";
import { Badge, Button, Progress } from "@radix-ui/themes";
import { getDifficultyColor } from "@utils/colors/getDifficultyColor";
import { useContext } from "react";
import { QuizzesStates } from "../context";
import ItemsNotFound from "@components/others/ItemsNotFound";
import Pagination from "@components/interfaces/Pagination";

function Quizzes() {
  const { data } = useContext(QuizzesStates);
  const [pageParam, setPageParam] = useSearchParams({ page: "1" });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed":
        return "green";
      case "failed":
        return "red";
    }
  };

  const getScoreColor = (score: number, passingScore: number) => {
    if (score >= 90) return "text-green-600 dark:text-green-400";
    if (score >= passingScore) return "text-blue-600 dark:text-blue-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="h-full flex-1">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data?.quizzes?.map((quiz) => {
          if (!quiz.quiz) {
            return (
              <div
                key={quiz._id}
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex h-auto flex-col space-y-1.5 p-6">
                  <span className="text-sm text-gray-600 italic dark:text-gray-400">
                    This quiz has been deleted from admin 🚫
                  </span>
                </div>
              </div>
            );
          }
          return (
            <div
              key={quiz._id}
              className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex flex-col space-y-1.5 p-4 sm:p-6 sm:pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {quiz.quiz.title}
                    </div>
                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                      {quiz.quiz.description}
                    </p>
                    <div className="mb-2 flex items-center gap-2 capitalize">
                      <Badge size="2" color={getStatusColor(quiz.status)}>
                        {quiz.status}
                      </Badge>
                      <Badge
                        size="2"
                        color={getDifficultyColor(quiz.quiz.difficulty)}
                      >
                        {quiz.quiz.difficulty}
                      </Badge>
                      <Badge size="2" color="gray">
                        <MdLock className="mr-1 h-3 w-3" />
                        No Retakes
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 sm:pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MdPerson className="h-4 w-4" />
                      <span>{quiz.quiz.questionsLength} questions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdAccessTime className="h-4 w-4" />
                      <span>{quiz.quiz.timeLimit} min</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Score
                      </span>
                      <span
                        className={`text-lg font-bold ${getScoreColor(
                          quiz.score,
                          quiz.quiz.passingScore,
                        )}`}
                      >
                        {Math.floor(quiz.score)}%
                      </span>
                    </div>
                    <Progress
                      value={quiz.score}
                      color={getStatusColor(quiz.status)}
                      className="mb-2 h-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Passing: {quiz.quiz.passingScore}%</span>
                      <span>
                        Completed:{" "}
                        {new Date(quiz.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to={`/dashboard/quiz/${quiz._id}/results`}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        radius="medium"
                        size="3"
                        className="!w-full"
                      >
                        View Results
                      </Button>
                    </Link>
                    <Button
                      className="!flex-1"
                      size="3"
                      disabled
                      variant="soft"
                      radius="medium"
                    >
                      <MdLock className="h-4 w-4" />
                      Completed
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Quiz completed on{" "}
                    {new Date(quiz.completedAt).toLocaleDateString()}. Retakes
                    are not allowed.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {data.totalQuizzes == 0 && (
        <ItemsNotFound
          type="quiz"
          className="h-full"
          title="No Quizzes found"
          buttonText="Browse Quizzes"
          buttonLink="/dashboard/quizzes/browse"
        />
      )}
      <div className="mt-6">
        <Pagination
          length={data.totalQuizzes}
          setPage={setPageParam}
          page={pageParam}
        />
      </div>
    </div>
  );
}

export default Quizzes;
