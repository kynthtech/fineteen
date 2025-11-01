import InputControlled from "@components/interfaces/Controlled/InputControlled";
import { ManageQuizzesContextStates } from "../ManageQuizzesContext";
import { useContext } from "react";
import SelectControlled from "@components/interfaces/Controlled/SelectControlled";
import TextAreaControlled from "@components/interfaces/Controlled/TextAreaControlled";
import { Checkbox } from "@radix-ui/themes";
import { classStandardDataArray } from "@utils/classStandardData";

function QuizDetails() {
  const { control, errors, register, watch, setValue } = useContext(
    ManageQuizzesContextStates,
  );

  const difficultyOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const visibilityOptions = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
  ];

  const handleCheckboxChange = (checked: boolean, group: string) => {
    const currentGroups = watch("assignedGroups") || [];
    if (checked) {
      setValue("assignedGroups", [...currentGroups, group]);
    } else {
      setValue(
        "assignedGroups",
        currentGroups.filter((g) => g !== group),
      );
    }
  };

  return (
    <div className="flex h-full flex-col justify-between space-y-6 lg:col-span-2">
      <h3 className="text-2xl leading-none font-semibold tracking-tight">
        Quiz Details
      </h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">
              Quiz Title <span className="text-red-500">*</span>
            </label>
            <InputControlled
              isRequired
              name="title"
              errors={errors}
              register={register}
              placeholder="Enter quiz title"
              errorMessage="Please enter a title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="difficulty">Visibility</label>
            <SelectControlled
              isRequired
              name="visibility"
              errors={errors}
              control={control}
              options={visibilityOptions}
              placeholder="Select visibility"
              errorMessage="Please select a visibility"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <TextAreaControlled
            isRequired
            errors={errors}
            name="description"
            register={register}
            placeholder="Enter course description"
            errorMessage="Please enter a quiz description"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="timeLimit">Time Limit (minutes)</label>
            <InputControlled
              isRequired
              name="timeLimit"
              type="number"
              errors={errors}
              register={register}
              placeholder="Enter time limit"
              errorMessage="Please enter a time limit"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passingScore">Passing Score (%)</label>
            <InputControlled
              isRequired
              type="number"
              errors={errors}
              name="passingScore"
              register={register}
              placeholder="Enter passing score"
              errorMessage="Please enter a passing score"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="difficulty">Difficulty Level</label>
            <SelectControlled
              isRequired
              name="difficulty"
              errors={errors}
              control={control}
              options={difficultyOptions}
              placeholder="Select difficulty level"
              errorMessage="Please select a difficulty level"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Assign to Groups</label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {classStandardDataArray.map((group) => (
              <div key={group} className="flex items-center">
                <Checkbox
                  id={group}
                  checked={watch("assignedGroups").includes(group)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(checked as boolean, group)
                  }
                />
                <label
                  htmlFor={group}
                  className="ml-2 text-sm font-normal select-none"
                >
                  {group}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizDetails;
