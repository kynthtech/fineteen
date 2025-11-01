import { useContext } from "react";
import { useNavigate } from "react-router";
import { CoursesStates } from "../context";
import { FaRegClock } from "react-icons/fa";
import { formatDate } from "@utils/format/formatDate";
import { MdCheck, MdPlayArrow } from "react-icons/md";
import { Badge, Button, Progress } from "@radix-ui/themes";
import ItemsNotFound from "@components/others/ItemsNotFound";

function CoursesList() {
  const navigate = useNavigate();
  const { data } = useContext(CoursesStates);

  if (!data.courses) {
    return null;
  }
  const getCourseButtonLabel = (progress: number) => {
    if (progress === 100) {
      return (
        <>
          <MdCheck /> Review
        </>
      );
    }

    if (progress === 0) {
      return (
        <>
          <MdPlayArrow /> Start Course
        </>
      );
    }

    if (progress > 0 && progress < 100) {
      return (
        <>
          <MdPlayArrow /> Continue
        </>
      );
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return "gray";
    if (progress === 100) return "green";
    return "yellow";
  };

  const getProgressText = (progress: number) => {
    if (progress === 0) return "Not Started";
    if (progress === 100) return "Completed";
    return "In Progress";
  };

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.courses.map((course) => (
          <div className="group flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4">
              <div className="relative flex items-start justify-between">
                <div className="relative z-0 w-full">
                  <img
                    alt="Budgeting Fundamentals thumbnail"
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-full rounded-lg object-cover sm:h-56"
                    src={`${
                      import.meta.env.VITE_API_URL
                    }/api/other/uploads?type=thumbnail&filename=${
                      course.course.thumbnail
                    }`}
                    style={{ color: "transparent" }}
                  />
                </div>
                <Badge
                  size="2"
                  variant="solid"
                  className="absolute top-2 right-2 z-10"
                  color={getProgressColor(course.progress)}
                >
                  {getProgressText(course.progress)}
                </Badge>
              </div>
              <div>
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <h3 className="font-bold text-gray-900 transition-colors duration-200 group-hover:text-cyan-600 sm:text-lg dark:text-white dark:group-hover:text-cyan-400">
                    {course.course.title}
                  </h3>
                  <div>
                    <Badge variant="outline" color="gray">
                      {formatDate(course.createdAt)}
                    </Badge>
                  </div>
                </div>
                <p className="mb-3 line-clamp-2 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                  {course.course.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaRegClock />
                    {course.course.duration}
                  </span>
                </div>
              </div>
              {!course.isCompleted && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Progress
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {course.progress}%
                    </span>
                  </div>
                  <Progress variant="soft" value={course.progress} />
                </div>
              )}
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-500">
                    {course.course.lessonsLength} lessons •{" "}
                    {course.course.difficulty} • {course.course.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Button
                size="3"
                variant="soft"
                radius="medium"
                className="!w-full"
                onClick={() => {
                  navigate(`/dashboard/courses/${course.course._id}`);
                }}
              >
                {getCourseButtonLabel(course.progress)}
              </Button>
            </div>
          </div>
        ))}
      </div>
      {data.courses.length == 0 && (
        <ItemsNotFound
          type="course"
          className="h-full"
          title="No course found"
          buttonText="Browse Courses"
          buttonLink="/dashboard/courses/browse"
        />
      )}
    </div>
  );
}

export default CoursesList;
