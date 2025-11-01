import clsx from "clsx";
import { memo, useContext, useEffect } from "react";
import { CoursesViewStates } from "../context";
import {
  MdAccessTime,
  MdCheckCircle,
  MdOutlineCircle,
  MdPlayCircleOutline,
} from "react-icons/md";
import { LessonDataStates } from "./context";

function CourseContent() {
  const { data } = useContext(CoursesViewStates);
  const { setCurrentLesson, currentLesson, setTractProgress } =
    useContext(LessonDataStates);

  const handleOpenLesson = (lesson: any, fromEffect: boolean) => {
    setTractProgress((prev) => ({
      ...prev,
      currentLesson: lesson.id,
      currentLessonTitle: lesson.title,
      isEdited: fromEffect ? false : true,
    }));
    setCurrentLesson(lesson);
  };

  useEffect(() => {
    if (data.currentLesson) {
      const lesson = data.course?.lessons.find(
        (lesson) => lesson.id === data.currentLesson,
      );
      handleOpenLesson(lesson, true);
    }
  }, [data.currentLesson]);

  const getLessonCompletion = (id: string) => {
    const isCurrentLesson = id === currentLesson.id;
    const isCompleted = data.completedLessons.includes(id);

    if (isCurrentLesson) {
      if (isCompleted) {
        return <MdCheckCircle className="text-green-500" size={20} />;
      } else {
        return <MdPlayCircleOutline className="text-cyan-500" size={20} />;
      }
    } else {
      if (isCompleted) {
        return <MdCheckCircle className="text-green-500" size={20} />;
      } else {
        return <MdOutlineCircle color="gray" size={20} />;
      }
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-3 font-bold text-gray-900 sm:mb-4 dark:text-white">
        Course Content
      </h3>
      <div className="space-y-2">
        {data.course?.lessons.map((lesson) => (
          <div
            onClick={() => handleOpenLesson(lesson, false)}
            className={clsx(
              "flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 text-left transition-all duration-200 select-none hover:bg-gray-50 sm:p-3 dark:hover:bg-gray-700/50",
              lesson.id === currentLesson.id &&
                "bg-gray-100 dark:bg-cyan-700/20",
            )}
          >
            {getLessonCompletion(lesson.id)}
            <div className="w-10 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {lesson.title}
              </p>
              <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <MdAccessTime className="size-4 sm:size-5" />
                {lesson.video.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(CourseContent);
