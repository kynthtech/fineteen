import { useContext } from "react";
import { BiTrophy } from "react-icons/bi";
import { AchievementsStates } from "../context";
import { IconButton } from "@radix-ui/themes";
import { MdCalendarMonth, MdCheck } from "react-icons/md";

function Achievements() {
  const { data } = useContext(AchievementsStates);

  if (!data.unlock) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
          <BiTrophy className="text-cyan-600 dark:text-cyan-400" size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
            Unlocked Achievements
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {data.unlock.length} achievements earned
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {data.unlock.map(({ achievement, unlockDate }) => (
          <div className="flex items-center gap-4 rounded-lg border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-2 sm:p-4 dark:border-cyan-800 dark:from-cyan-900/20 dark:to-blue-900/20">
            <div className="text-xl sm:text-3xl">{achievement.icon}</div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                  {achievement.title}
                </h3>
              </div>
              <p className="mb-2 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                {achievement.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                <MdCalendarMonth size={16} />
                <span>Unlocked on {new Date(unlockDate).toDateString()}</span>
              </div>
            </div>
            <IconButton variant="soft" color="green">
              <MdCheck size={20} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
