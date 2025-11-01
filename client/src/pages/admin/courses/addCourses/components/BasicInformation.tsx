import { useContext, useEffect, useRef } from "react";
import { ManageCoursesContextStates } from "../ManageCourseContext";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import SelectControlled from "@components/interfaces/Controlled/SelectControlled";
import TextAreaControlled from "@components/interfaces/Controlled/TextAreaControlled";
import FileUploadControlled from "@components/interfaces/Controlled/FileUploadControlled";

const BasicInformation = () => {
  const { errors, register, control, isEditCourse, setValue, watch } =
    useContext(ManageCoursesContextStates);
  const oldThumbnailRef = useRef<string>("");

  const categoryOptions = [
    {
      value: "basics",
      label: "Basics",
    },
    {
      value: "investment",
      label: "Investment",
    },
    {
      value: "advanced",
      label: "Advanced",
    },
    {
      value: "business",
      label: "Business",
    },
  ];

  const difficultyOptions = [
    {
      value: "beginner",
      label: "Beginner",
    },
    {
      value: "intermediate",
      label: "Intermediate",
    },
    {
      value: "advanced",
      label: "Advanced",
    },
  ];

  useEffect(() => {
    if (isEditCourse) {
      const thumbnail = watch("thumbnail");

      if (typeof thumbnail === "string") {
        oldThumbnailRef.current = thumbnail;
      }

      if (thumbnail instanceof File) {
        if (typeof oldThumbnailRef.current === "string") {
          setValue("deletedFiles.thumbnail", oldThumbnailRef.current);
        }
      }
    }
  }, [isEditCourse, watch("thumbnail")]);
  const visibilityOptions = [
    {
      value: "public",
      label: "Public",
    },
    {
      value: "private",
      label: "Private",
    },
  ];
  return (
    <div className="p-0 sm:p-6">
      <h3 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
        Basic Information
      </h3>
      <div className="mt-4 space-y-4 sm:mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Course Title</label>
          <InputControlled
            isRequired
            name="title"
            errors={errors}
            register={register}
            placeholder="Enter course title"
            errorMessage="Please enter a course title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <TextAreaControlled
            isRequired
            name="description"
            errors={errors}
            register={register}
            placeholder="Enter course description"
            errorMessage="Please enter a course description"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <SelectControlled
              isRequired
              name="category"
              errors={errors}
              control={control}
              options={categoryOptions}
              placeholder="Select a category"
              errorMessage="Please select a category"
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
              errorMessage="Please select a defficulty level"
              placeholder="Select a difficulty level"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="duration">Duration</label>
            <InputControlled
              isRequired
              name="duration"
              errors={errors}
              register={register}
              placeholder="Enter course duration"
              errorMessage="Please enter a course duration"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Visibility</label>
            <SelectControlled
              isRequired
              name="visibility"
              control={control}
              errors={errors}
              options={visibilityOptions}
              errorMessage="Please select a visibility"
              placeholder="Select visibility"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Select Thumbnail</label>
          <FileUploadControlled
            isRequired
            errors={errors}
            accept="image/*"
            name="thumbnail"
            control={control}
            errorMessage="Please select a thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
