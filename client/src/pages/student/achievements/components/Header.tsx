import { useContext } from "react";
import { AchievementsStates } from "../context";

function Header() {
  const { data } = useContext(AchievementsStates);

  if (!(data.look || data.unlock)) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Achievements
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track your learning milestones and celebrate your progress
        </p>
      </div>
      <div className="flex items-center space-x-3 self-end sm:self-start">
        <div className="text-center">
          <div className="text-xl font-bold text-cyan-500 sm:text-2xl">
            {data.unlock.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Unlocked
          </div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-400 sm:text-2xl">
            {data.look.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Locked</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
