import { useContext } from "react";
import { IoMdTrophy } from "react-icons/io";
import { MdAccessTime, MdPerson } from "react-icons/md";
import { ParticipantStates } from "../context";
import useWindowSize from "@hooks/useWindowSize";

function Stats() {
  const { data } = useContext(ParticipantStates);
  const { isMobile } = useWindowSize();

  if (!data.stats || !data.quizData) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Participants
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.totalParticipants}
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
                {data.stats.averageScore}%
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 sm:size-12 dark:bg-green-900">
              <IoMdTrophy
                className="text-green-600 dark:text-green-400"
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
                Pass Rate
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.stats.passingRate}%
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-purple-100 sm:size-12 dark:bg-purple-900">
              <IoMdTrophy
                className="text-purple-600 dark:text-purple-400"
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
                Time Limit
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.quizData.timeLimit}:00
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-orange-100 sm:size-12 dark:bg-orange-900">
              <MdAccessTime
                className="text-orange-600 dark:text-orange-400"
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
