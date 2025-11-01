import clsx from "clsx";
import { useContext } from "react";
import { Badge } from "@radix-ui/themes";
import { MdCheckCircle, MdErrorOutline } from "react-icons/md";
import { QuizResultStates } from "../context";

function TabReview() {
  const { data } = useContext(QuizResultStates);

  return data.questionsReview.map((question, index: number) => {
    const studentAnswer = question.studentAnswer;
    const isCorrect = studentAnswer === question.correctAnswer;
    return (
      <div
        key={question.id}
        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Question {index + 1}
              {isCorrect ? (
                <MdCheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <MdErrorOutline className="h-5 w-5 text-red-600" />
              )}
            </h3>
            <p className="mt-2 text-gray-900 dark:text-white">
              {question.question}
            </p>
          </div>
          <Badge color={isCorrect ? "green" : "red"} size="2">
            {isCorrect ? "Correct" : "Incorrect"}
          </Badge>
        </div>
        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            {question.options.map((option: any, optionIndex: number) => {
              optionIndex += 1;
              return (
                <div
                  key={optionIndex}
                  className={clsx(
                    "rounded-lg border p-3 transition-colors",
                    optionIndex === question.correctAnswer
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : optionIndex === studentAnswer && !isCorrect
                        ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                        : "border-gray-200 dark:border-gray-700",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={clsx(
                        "h-4 w-4 rounded-full border-2",
                        optionIndex === question.correctAnswer
                          ? "border-green-500 bg-green-500"
                          : optionIndex === studentAnswer && !isCorrect
                            ? "border-red-500 bg-red-500"
                            : "border-gray-300 dark:border-gray-600",
                      )}
                    >
                      {(optionIndex === question.correctAnswer ||
                        (optionIndex === studentAnswer && !isCorrect)) && (
                        <div className="mx-auto mt-0.5 h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-gray-900 dark:text-white">
                      {option}
                    </span>
                    {optionIndex === question.correctAnswer && (
                      <Badge size="2" variant="outline" color="green">
                        Correct Answer
                      </Badge>
                    )}
                    {optionIndex === studentAnswer && !isCorrect && (
                      <Badge size="2" variant="outline" color="red">
                        Your Answer
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {question.explanation && (
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="mb-2 font-medium text-blue-900 dark:text-blue-300">
                Explanation
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  });
}

export default TabReview;
