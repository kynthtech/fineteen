import { useContext } from "react";
import { nanoid } from "@reduxjs/toolkit";
import type { TQuestion } from "@types_/quiz";
import { MdDelete, MdPlusOne } from "react-icons/md";
import { Button, IconButton, Radio } from "@radix-ui/themes";
import { ManageQuizzesContextStates } from "../ManageQuizzesContext";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import TextAreaControlled from "@components/interfaces/Controlled/TextAreaControlled";

function Questions() {
  const { register, errors, watch, setValue } = useContext(
    ManageQuizzesContextStates,
  );

  const addQuestion = () => {
    const newQuestion: TQuestion = {
      id: nanoid(),
      question: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
      explanation: "",
    };
    setValue("questions", [...watch("questions"), newQuestion]);
  };

  const removeQuestion = (questionId: string) => {
    const filteredQuestions = watch("questions").filter(
      (q) => q.id !== questionId,
    );

    setValue("questions", filteredQuestions);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl leading-none font-semibold tracking-tight">
          Questions ({watch("questions").length})
        </h3>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addQuestion();
          }}
          variant="soft"
          radius="medium"
          size="3"
        >
          <MdPlusOne className="h-4 w-4" />
          Add Question
        </Button>
      </div>
      <div className="space-y-6">
        {watch("questions").length === 0 ? (
          <div className="py-8 text-center">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No questions added yet
            </p>
            <Button
              variant="soft"
              size="3"
              radius="medium"
              onClick={addQuestion}
            >
              <MdPlusOne className="h-4 w-4" />
              Add Your First Question
            </Button>
          </div>
        ) : (
          watch("questions").map((question, index) => (
            <div
              key={question.id}
              className="bg:white mt-5 rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-700/10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Question {index + 1}
                </h3>
                <IconButton
                  variant="soft"
                  type="button"
                  size={"3"}
                  onClick={() => removeQuestion(question.id)}
                  color="red"
                >
                  <MdDelete />
                </IconButton>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label>
                    Question Text <span className="text-red-500">*</span>
                  </label>
                  <InputControlled
                    isRequired
                    errors={errors}
                    name={`questions.${index}.question`}
                    register={register}
                    placeholder="Enter question text"
                    errorMessage="Please enter a question text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>
                    Answer Options <span className="text-red-500">*</span>
                  </label>
                  {watch(`questions.${index}.options`).map((_, optionIndex) => (
                    <div key={optionIndex} className="flex items-center gap-3">
                      <Radio
                        color="green"
                        value={(optionIndex + 1).toString()}
                        defaultChecked={
                          question.correctAnswer === optionIndex + 1
                        }
                        {...register(`questions.${index}.correctAnswer`)}
                      />
                      <InputControlled
                        isRequired
                        errors={errors}
                        name={`questions.${index}.options.${optionIndex}`}
                        register={register}
                        placeholder="Enter option text"
                        errorMessage="Please enter an option text"
                      />
                    </div>
                  ))}
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Select the radio button next to the correct answer
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Explanation (Optional)</label>
                  <TextAreaControlled
                    isRequired={false}
                    errors={errors}
                    name={`questions.${index}.explanation`}
                    register={register}
                    placeholder="Enter course description"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Questions;
