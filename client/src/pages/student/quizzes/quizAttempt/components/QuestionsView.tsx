import { useContext } from "react";
import { QuizAttemptStates } from "../context";
import { Button, RadioGroup } from "@radix-ui/themes";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function QuestionsView() {
  const {
    data,
    answers,
    setAnswers,
    currentQuestion,
    setCurrentQuestion,
    setShowSubmitDialog,
  } = useContext(QuizAttemptStates);

  if (Object.entries(data).length === 0) {
    return null;
  }

  const currentQuestionData = data.questions[currentQuestion];

  const handleAnswerChange = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <div className="text-lg">Questions</div>
        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="grid grid-cols-5 gap-2 lg:grid-cols-5">
            {data.questions.map((question, index) => (
              <button
                key={question.id}
                onClick={() => setCurrentQuestion(index)}
                className={`relative rounded-lg p-2 text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? "bg-cyan-500 text-white"
                    : answers[question.id] !== undefined
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-cyan-500"></div>
              <span>Current</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-green-100 dark:bg-green-900"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-gray-100 dark:bg-gray-700"></div>
              <span>Not answered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-2 text-xl">Question {currentQuestion + 1}</div>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              {currentQuestionData.question}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <RadioGroup.Root
            value={answers[currentQuestionData.id]?.toString() || ""}
            onValueChange={(value) =>
              handleAnswerChange(currentQuestionData.id, Number.parseInt(value))
            }
          >
            {currentQuestionData.options.map((option, index) => {
              index += 1;
              return (
                <div
                  key={index}
                  className="mt-2 flex items-center gap-3 space-x-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <RadioGroup.Item
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer text-gray-900 dark:text-white"
                  >
                    {option}
                  </label>
                </div>
              );
            })}
          </RadioGroup.Root>
          <div className="flex items-center justify-between pt-6">
            <Button
              variant="outline"
              size="3"
              radius="medium"
              onClick={() =>
                setCurrentQuestion(Math.max(0, currentQuestion - 1))
              }
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <MdChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex gap-3">
              {currentQuestion === Number(data.questionsLength) - 1 ? (
                <Button
                  variant="solid"
                  size="3"
                  radius="medium"
                  onClick={() => setShowSubmitDialog(true)}
                  color="green"
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  variant="solid"
                  size="3"
                  radius="medium"
                  onClick={() =>
                    setCurrentQuestion(
                      Math.min(
                        Number(data.questionsLength) - 1,
                        currentQuestion + 1,
                      ),
                    )
                  }
                  className="flex items-center gap-2 bg-cyan-500 text-white hover:bg-cyan-600"
                >
                  Next
                  <MdChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsView;
