import { BiPlus } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import React, { useContext } from "react";
import { toast } from "@functions/toast/toast";
import { formatFileSize } from "@utils/format/formatFileSize";
import FileUpload from "@components/interfaces/FileUpload";
import { Badge, Button, IconButton } from "@radix-ui/themes";
import { ManageCoursesContextStates } from "../ManageCourseContext";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import EditorControlled from "@components/interfaces/Controlled/EditorControlled";
import FileUploadControlled from "@components/interfaces/Controlled/FileUploadControlled";
import { nanoid } from "@reduxjs/toolkit";
import useWindowSize from "@hooks/useWindowSize";

function CourseLesson() {
  const { watch, errors, register, setValue, control, isEditCourse } =
    useContext(ManageCoursesContextStates);
  const { isMobile } = useWindowSize();

  const addResource = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) => {
    e.preventDefault();

    const input = document.getElementsByName(
      `resources-${index}`,
    )[0] as HTMLInputElement;

    const file = input.files?.[0];

    if (file) {
      const resources = watch(`lessons.${index}.resources`);

      const isDuplicate = resources.some(
        (r) => r.name instanceof File && r.name.name === file.name,
      );

      if (isDuplicate) {
        return toast.error("File already exists");
      }

      setValue(`lessons.${index}.resources`, [
        ...watch(`lessons.${index}.resources`),
        { name: file, size: formatFileSize(file.size) },
      ]);
      input.value = "";
      (
        document.getElementById(`resources-${index}-span`) as HTMLSpanElement
      ).innerText = "No file selected";
    } else {
      toast.error("Please select a file");
    }
  };

  const removeResource = (resource: any, index: number) => {
    const resources = watch(`lessons.${index}.resources`);

    const newResources = resources.filter((r) =>
      typeof r === "string" ? r !== resource : r.name !== resource.name,
    );

    setValue(`lessons.${index}.resources`, newResources);

    if (isEditCourse) {
      if (typeof resource.name !== "string") {
        return;
      }
      const resourceFile = watch("deletedFiles.resources");
      setValue("deletedFiles.resources", [
        ...(resourceFile ?? []),
        resource.name,
      ]);
    }
  };

  const addLesson = () => {
    const lesson = {
      id: nanoid(),
      title: "",
      description: "",
      video: { name: "", duration: "" },
      resources: [],
    };
    setValue("lessons", [...watch("lessons"), lesson]);
  };

  const removeLesson = (lessonId: string) => {
    if (isEditCourse) {
      const lesson = watch("lessons").find((lesson) => lesson.id === lessonId);
      if (!lesson) return;

      const resourceFile = watch("deletedFiles.resources") ?? [];
      const videoFile = watch("deletedFiles.video") ?? [];

      const newResources = lesson.resources.map((r) => r.name);
      const newVideo = lesson.video ? [lesson.video.name] : [];

      setValue("deletedFiles.resources", [
        ...resourceFile,
        ...newResources.filter((resource) => typeof resource === "string"),
      ]);
      setValue("deletedFiles.video", [...videoFile, ...newVideo]);
    }

    const updatedLessons = watch("lessons").filter(
      (lesson) => lesson.id !== lessonId,
    );

    setValue("lessons", updatedLessons);
  };

  const handleChange = (id: string) => {
    if (isEditCourse) {
      const videoFilename = watch("lessons").find((lesson) => lesson.id === id)
        ?.video.name;

      if (typeof videoFilename == "string") {
        setValue("deletedFiles.video", [
          ...(watch("deletedFiles.video") ?? []),
          videoFilename,
        ]);
      }
    }
  };

  return (
    <div className="sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
          Course Lessons
        </h3>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addLesson();
          }}
          size={isMobile ? "2" : "3"}
          radius="medium"
          className="bg-cyan-500 hover:bg-cyan-600"
        >
          <BiPlus className="mr-2 h-4 w-4" />
          Add {watch("lessons").length + 1} Lesson
        </Button>
      </div>
      <div className="mt-6">
        {watch("lessons").length === 0 && (
          <div className="py-8 text-center text-gray-500 dark:text-gray-400">
            No lessons added yet. Click "Add Lesson" to get started.
          </div>
        )}
        {watch("lessons").map((lesson, index: number) => (
          <div
            key={index}
            className="mt-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/10"
          >
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Add New Lesson
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="lesson-title">Lesson Title</label>
                <InputControlled
                  isRequired
                  name={`lessons[${index}].title`}
                  errors={errors}
                  register={register}
                  placeholder="Enter course title"
                  errorMessage="Please enter a course title"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lesson-description">Description</label>
                <EditorControlled
                  errors={errors}
                  control={control}
                  name={`lessons[${index}].description`}
                  errorMessage="Please enter a description"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="video-url">Video From Media</label>
                  <FileUploadControlled
                    isRequired={true}
                    errors={errors}
                    accept="video/*"
                    control={control}
                    onChange={() => handleChange(lesson.id)}
                    name={`lessons[${index}].video.name`}
                    errorMessage="Please select a video"
                  />
                </div>
              </div>
              <div>
                <label>
                  Resources{" "}
                  <span className="text-xs text-gray-400">
                    (PDF, link, etc.)
                  </span>
                </label>
                <div className="mt-2 flex gap-2">
                  <FileUpload accept="pdf,ppt/*" name={`resources-${index}`} />
                  <Button
                    radius="medium"
                    type="button"
                    className="!h-auto"
                    onClick={(e) => addResource(e, index)}
                    size={isMobile ? "2" : "3"}
                  >
                    Add
                  </Button>
                </div>
                {watch(`lessons.${index}.resources`).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {watch(`lessons.${index}.resources`).map(
                      (resource, idx) => (
                        <Badge key={idx} variant="outline" size="3">
                          {resource.name instanceof File
                            ? resource.name.name
                            : resource.name}
                          <IconButton
                            size="1"
                            color="red"
                            variant="ghost"
                            onClick={(e) => {
                              e.preventDefault();
                              removeResource(resource, index);
                            }}
                          >
                            <MdClose />
                          </IconButton>
                        </Badge>
                      ),
                    )}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  size={"3"}
                  variant="soft"
                  radius="medium"
                  onClick={(e) => {
                    e.preventDefault();
                    removeLesson(lesson.id);
                  }}
                  color="tomato"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseLesson;
