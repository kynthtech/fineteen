import { useContext, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "@functions/toast/toast";
import ManageQuizzesProvider, {
  ManageQuizzesContextStates,
} from "./ManageQuizzesContext";
import useQuizApi from "@hooks/api/admin/useQuiz.api";
import { Button } from "@radix-ui/themes";
import { MdArrowLeft, MdSave } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import QuizDetails from "./components/QuizDetails";
import Questions from "./components/Questions";
import Preview from "./components/Preview";
import type { TQuizData } from "@types_/quiz";

export default function CreateQuiz() {
  return (
    <ManageQuizzesProvider>
      <Content />
    </ManageQuizzesProvider>
  );
}

const Content = () => {
  const navigation = useNavigate();
  const loaderResult = useLoaderData<any>();
  const { createQuiz, updateQuiz, loading } = useQuizApi();

  const { handleSubmit, reset, setIsEditQuiz, setIsPreview, isPreview } =
    useContext(ManageQuizzesContextStates);

  useEffect(() => {
    if (loaderResult) {
      reset(loaderResult);
      setIsEditQuiz(true);
    }
  }, [reset]);

  const handleSaveQuiz = (params: TQuizData) => {
    params.questionsLength = params.questions.length;

    if (params.assignedGroups.length == 0) {
      toast.error("Please add at least one group");
      return;
    }

    if (params.questions.length == 0) {
      toast.error("Please add at least one question");
      return;
    }

    params.questions.map((question) => {
      if (question.correctAnswer == 0) {
        toast.info("Please select correct answer");
      }
    });

    const apiCall = loaderResult ? updateQuiz : createQuiz;

    console.log(params);

    toast.processing(apiCall(params), {
      loadingText: loaderResult ? "Updating Quiz.." : "Creating Quiz..",
      successText: () => {
        navigation("/admin/quizzes");
        return loaderResult
          ? "Quiz updated successfully"
          : "Quiz created successfully";
      },
      errorText: (response) => response.data.error,
    });
  };

  if (isPreview) {
    return <Preview />;
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleSaveQuiz)}>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/admin/quizzes?page=1" className="ml-2">
            <Button radius="medium" size={"3"} variant="ghost">
              <MdArrowLeft className="h-4 w-4" />
              Back to Quizzes
            </Button>
          </Link>
          <h1 className="ml-3 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
            Create New Quiz
          </h1>
        </div>
        <div className="flex gap-3">
          <Button
            size={"3"}
            variant="soft"
            radius="medium"
            onClick={() => setIsPreview(true)}
          >
            <IoMdEye className="h-4 w-4" />
            Preview
          </Button>
          <Button radius="medium" disabled={loading} size={"3"}>
            <MdSave className="h-4 w-4" />
            Publish Quiz
          </Button>
        </div>
      </div>
      <QuizDetails />
      <Questions />
    </form>
  );
};
