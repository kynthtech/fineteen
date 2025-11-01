import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { QuizAttemptStates } from "../context";
import { formatTime } from "media-chrome/dist/utils/time.js";

function SubmitQuiz() {
  const {
    data,
    setShowSubmitDialog,
    answers,
    timeLeft,
    handleSubmit,
    loading,
  } = useContext(QuizAttemptStates);
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row items-center justify-between space-y-1.5">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Submit Quiz?</h2>
        </div>
        <MdClose
          onClick={() => setShowSubmitDialog(false)}
          cursor={"pointer"}
          size={20}
        />
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          Are you sure you want to submit your quiz? You won't be able to change
          your answers after submission.
        </p>
        <div className="space-y-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <div className="flex justify-between">
            <span>Questions answered:</span>
            <span className="font-medium">
              {answeredQuestions} of {data.questions.length}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Time remaining:</span>
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
          {answeredQuestions < data.questions.length && (
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              You have {data.questions.length - answeredQuestions} unanswered
              questions.
            </p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button
            size="3"
            color="gray"
            radius="medium"
            variant="soft"
            onClick={() => setShowSubmitDialog(false)}
          >
            Continue Quiz
          </Button>
          <Button
            loading={loading}
            size="3"
            radius="medium"
            onClick={handleSubmit}
            color="green"
          >
            Submit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SubmitQuiz;
