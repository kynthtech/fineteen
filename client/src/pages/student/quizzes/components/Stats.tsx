import { useContext } from "react";
import { BiBookOpen } from "react-icons/bi";
import { MdCheck, MdPersonOutline } from "react-icons/md";
import { QuizzesStates } from "../context";
import useWindowSize from "@hooks/useWindowSize";

function Stats() {
  const { data } = useContext(QuizzesStates);
  const { isMobile } = useWindowSize();

  if (!data.stats) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Quizzes
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.totalQuizzes}
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 sm:size-12 dark:bg-blue-900">
              <BiBookOpen
                className="text-blue-600 dark:text-blue-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Completed
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.stats.attempted}
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 sm:size-12 dark:bg-green-900">
              <MdCheck
                className="text-green-600 dark:text-green-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Average Score
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.stats.averageScore}%
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-purple-100 sm:size-12 dark:bg-purple-900">
              <MdPersonOutline
                className="text-purple-600 dark:text-purple-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Passed
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.stats.passed}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {(data.stats.passed || 0 / data.totalQuizzes || 0) * 100}% pass
                rate
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-100 sm:size-12 dark:bg-cyan-900">
              <MdCheck
                className="text-cyan-600 dark:text-cyan-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
