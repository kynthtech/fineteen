import { Button } from "@radix-ui/themes";
import { useContext, useEffect } from "react";
import { toast } from "@functions/toast/toast";
import type { TCourse } from "src/types/course";
import CourseLesson from "./components/CourseLesson";
import { MdArrowLeft, MdSave } from "react-icons/md";
import CourseSummary from "./components/CourseSummary";
import useCourseApi from "@hooks/api/admin/useCourse.api";
import { getVideoDuration } from "@utils/getVideoDuration";
import BasicInformation from "./components/BasicInformation";
import { Link, useLoaderData, useNavigate } from "react-router";
import AddCourseProvider, {
  ManageCoursesContextStates,
} from "./ManageCourseContext";

export default function CreateCourse() {
  return (
    <AddCourseProvider>
      <Content />
    </AddCourseProvider>
  );
}

const Content = () => {
  const navigation = useNavigate();
  const loaderResult = useLoaderData<TCourse>();
  const { createCourse, updateCourse, loading } = useCourseApi();
  const { handleSubmit, reset, setIsEditCourse } = useContext(
    ManageCoursesContextStates,
  );

  useEffect(() => {
    if (loaderResult) {
      reset(loaderResult);
      setIsEditCourse(true);
    }
  }, [reset]);

  const handleSaveCourse = async (data: any) => {
    var params = data as TCourse;

    if (params.lessons.length == 0) {
      toast.error("Please add at least one lesson");
      return;
    }

    await Promise.all(
      params.lessons.map(async (lesson) => {
        if (typeof lesson.video.name === "object") {
          const duration = await getVideoDuration(lesson.video.name as Blob);
          lesson.video.duration = duration;
        }
      }),
    );

    params.lessonsLength = params.lessons.length;

    const apiCall = loaderResult ? updateCourse : createCourse;

    toast.processing(apiCall(params), {
      loadingText: loaderResult ? "Updating course.." : "Creating course..",
      successText: () => {
        navigation("/admin/courses");
        return loaderResult
          ? "Course updated successfully"
          : "Course created successfully";
      },
      errorText: (response) => response.data.error,
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          to={"/admin/courses?page=1"}
          className="mt-3 ml-1 sm:mt-0 sm:ml-3"
        >
          <Button variant="ghost" size={"3"} radius="medium">
            <MdArrowLeft className="mr-2 size-4" />
            Back to Course
          </Button>
        </Link>
        <div className="sm:ml-4">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            {loaderResult ? "Update" : "Add"} Course
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {loaderResult ? "Update" : "Add"} course information and content
          </p>
        </div>
      </div>
      <form
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        onSubmit={handleSubmit(handleSaveCourse)}
      >
        <div className="space-y-6 sm:rounded-lg sm:border sm:border-gray-200 sm:bg-white lg:col-span-2 dark:sm:border-gray-700 dark:sm:bg-gray-700/10">
          <hr className="border-gray-200 sm:hidden dark:border-gray-700" />
          <BasicInformation />
          <CourseLesson />
        </div>
        <div className="space-y-6">
          <CourseSummary />
          <div className="space-y-2 pt-4">
            <Button disabled={loading} size={"3"} radius="medium">
              <MdSave />
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
