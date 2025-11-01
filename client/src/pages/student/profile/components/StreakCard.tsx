import { StudentMeStates } from "@pages/student/context";
import { useContext } from "react";

function StreakCard() {
  const { student } = useContext(StudentMeStates);
  return (
    <div className="rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 shadow-sm sm:p-6 dark:border-cyan-700/50 dark:from-cyan-900/20 dark:to-blue-900/20">
      <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
        Learning Streak
      </h3>
      <div className="text-center">
        <div className="mb-1 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
          {student.streak}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          days in a row
        </p>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Keep it up! You're doing great.
        </p>
      </div>
    </div>
  );
}

export default StreakCard;
