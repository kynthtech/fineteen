import { MdPerson, MdQuiz } from "react-icons/md";
import { TbTarget } from "react-icons/tb";
import { QuizzesStates } from "../context";
import { useContext } from "react";
import useWindowSize from "@hooks/useWindowSize";

function Stats() {
  const { data } = useContext(QuizzesStates);
  const { isMobile } = useWindowSize();

  if (!data.stats) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Quizzes
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.stats.totalQuizzes}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {data.stats.totalPublicQuizzes} published
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-100 sm:size-12 dark:bg-cyan-900">
              <MdQuiz
                className="text-cyan-600 dark:text-cyan-400"
                size={isMobile ? 20 : 24}
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
                Total Participants
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.stats.studentsAttempted}
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 sm:size-12 dark:bg-blue-900">
              <MdPerson
                className="text-blue-600 dark:text-blue-400"
                size={isMobile ? 20 : 24}
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
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {Number(data.stats.averageScore).toFixed(2)}%
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 sm:size-12 dark:bg-green-900">
              <TbTarget
                className="text-green-600 dark:text-green-400"
                size={isMobile ? 20 : 24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
