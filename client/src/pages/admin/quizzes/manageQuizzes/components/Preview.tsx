import { Badge, Button } from "@radix-ui/themes";
import { useContext } from "react";
import { MdAccessTime, MdArrowLeft, MdPerson } from "react-icons/md";
import { ManageQuizzesContextStates } from "../ManageQuizzesContext";
import { getDifficultyColor } from "@utils/colors/getDifficultyColor";
import { getStatusColor } from "@utils/colors/getStatusColor";
import clsx from "clsx";

function Preview() {
  const { setIsPreview, watch } = useContext(ManageQuizzesContextStates);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            size="3"
            variant="ghost"
            radius="medium"
            onClick={() => setIsPreview(false)}
          >
            <MdArrowLeft className="h-4 w-4" />
            Back to Edit
          </Button>
          <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
            Quiz Preview
          </h1>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-700/10">
        <div className="mb-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xl">{watch("title")}</div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {watch("description")}
              </p>
            </div>
            <div className="flex items-center gap-2 capitalize">
              <Badge size={"2"} color={getDifficultyColor(watch("difficulty"))}>
                {watch("difficulty")}
              </Badge>
              <Badge size={"2"} color={getStatusColor(watch("visibility"))}>
                {watch("visibility")}
              </Badge>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MdAccessTime className="h-4 w-4" />
              <span>{watch("timeLimit")} minutes</span>
            </div>
            <div className="flex items-center gap-1">
              <MdPerson className="h-4 w-4" />
              <span>{watch("questions").length} questions</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {watch("questions").map((question, index) => (
            <div
              key={question.id}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-4 font-medium text-gray-900 dark:text-white">
                {index + 1}. {question.question}
              </h3>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  optionIndex += 1;
                  const isCorrect =
                    Number(optionIndex) === Number(question.correctAnswer);
                  return (
                    <div
                      key={optionIndex}
                      className={clsx(
                        "cursor-pointer rounded-lg border p-3 transition-colors",
                        isCorrect
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                          : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900/40",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={clsx(
                            "h-4 w-4 rounded-full border-2",
                            isCorrect
                              ? "border-green-500 bg-green-500"
                              : "border-gray-300 dark:border-gray-600",
                          )}
                        >
                          {isCorrect && (
                            <div className="mx-auto mt-0.5 h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-gray-900 dark:text-white">
                          {option}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {question.explanation && (
                <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preview;
