import { useContext } from "react";
import { AchievementsStates } from "../context";
import { FiTarget } from "react-icons/fi";

function LockedAchievements() {
  const { data } = useContext(AchievementsStates);

  if (!data.look) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
          <FiTarget className="text-gray-600 dark:text-gray-400" size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
            Locked Achievements
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {data.look.length} achievements to unlock
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {data.look.map((achievement) => (
          <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-2 opacity-75 sm:p-4 dark:border-gray-600 dark:bg-gray-700/50">
            <div className="text-xl grayscale sm:text-3xl">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-700 sm:text-lg dark:text-gray-300">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
            <div className="flex size-9 items-center justify-center rounded-full bg-gray-200 sm:size-12 dark:bg-gray-600">
              <FiTarget className="text-gray-400" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LockedAchievements;
