import { Fragment, useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { CoursesViewStates } from "../context";
import { Button, Progress } from "@radix-ui/themes";
import { LessonDataStates } from "./context";
import { Link } from "react-router";

function Header() {
  const { data } = useContext(CoursesViewStates);
  const { updateCourseProgress } = useContext(LessonDataStates);

  return (
    <Fragment>
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Link to="/dashboard/courses" onClick={updateCourseProgress}>
          <Button variant="ghost" radius="medium" size="3">
            <BiArrowBack />
            Back to Courses
          </Button>
        </Link>
      </div>
      <div className="w-full rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 dark:border-blue-700/50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              {data.course?.title}
            </h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {data.course?.description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="focus:ring-ring hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-blue-900/30 dark:text-blue-400">
              {data.progress}% Complete
            </div>
            <Progress variant="soft" value={data.progress} size={"2"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
