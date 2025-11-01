import { useContext } from "react";
import { FiTarget } from "react-icons/fi";
import { IoMdTrophy } from "react-icons/io";
import { MdAccessTime, MdCheckCircle, MdTrendingUp } from "react-icons/md";
import { OverviewStates } from "../context";
import { secondsToHours } from "@utils/format/secondsToHours";

function StatsCards() {
  const { data } = useContext(OverviewStates);
  if (!data.gridOverview) {
    return null;
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Courses Completed
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {data.gridOverview.courses.completed}
            </p>
            <p className="mt-1 flex items-center text-xs text-green-600 dark:text-green-400">
              <MdTrendingUp className="mr-1 h-3 w-3" />
              completed
            </p>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 sm:size-12 dark:bg-green-900/30">
            <MdCheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Study Hours
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {secondsToHours(data.gridOverview.courses.totalHours)}
            </p>
            <p className="mt-1 flex items-center text-xs text-blue-600 dark:text-blue-400">
              <MdAccessTime className="mr-1 h-3 w-3" />
              hours studied
            </p>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 sm:size-12 dark:bg-blue-900/30">
            <MdAccessTime className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Achievements
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {data.gridOverview.achievements}
            </p>
            <p className="mt-1 flex items-center text-xs text-yellow-600 dark:text-yellow-400">
              <IoMdTrophy className="mr-1 h-3 w-3" />
              badges earned
            </p>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-yellow-100 sm:size-12 dark:bg-yellow-900/30">
            <IoMdTrophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Overall Progress
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {data.gridOverview.overallProgress}%
            </p>
            <p className="mt-1 flex items-center text-xs text-purple-600 dark:text-purple-400">
              <FiTarget className="mr-1 h-3 w-3" />
              quiz and course
            </p>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-purple-100 sm:size-12 dark:bg-purple-900/30">
            <FiTarget className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
