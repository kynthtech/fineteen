import { BiBookOpen } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { CoursesStates } from "../context";
import { useContext } from "react";
import { secondsToHours } from "@utils/format/secondsToHours";

function ProgressOverview() {
  const { data } = useContext(CoursesStates);

  if (!data.stats) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
      <div className="rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-4 shadow-sm sm:p-6 dark:border-green-700/50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              Completed Courses
            </p>
            <p className="text-xl font-bold text-green-900 sm:text-2xl dark:text-green-300">
              {data.stats.completed}
            </p>
          </div>
          <MdCheck className="size-6 text-green-600 sm:size-8 dark:text-green-400" />
        </div>
      </div>
      <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 shadow-sm sm:p-6 dark:border-blue-700/50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
              In Progress
            </p>
            <p className="text-xl font-bold text-blue-900 sm:text-2xl dark:text-blue-300">
              {data.stats.inProgress}
            </p>
          </div>
          <BiBookOpen className="size-6 text-blue-600 sm:size-8 dark:text-blue-400" />
        </div>
      </div>
      <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4 shadow-sm sm:p-6 dark:border-purple-700/50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
              Total Hours
            </p>
            <p className="text-xl font-bold text-purple-900 sm:text-2xl dark:text-purple-300">
              {secondsToHours(data.stats.totalHours)}
            </p>
          </div>
          <FaRegClock className="size-6 text-purple-600 sm:size-8 dark:text-purple-400" />
        </div>
      </div>
    </div>
  );
}

export default ProgressOverview;
