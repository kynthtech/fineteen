import { useContext } from "react";
import { StudentViewStates } from "../context";
import { IoMdTrendingUp } from "react-icons/io";
import { Progress } from "@radix-ui/themes";

function AcademicProgress() {
  const {
    data: { academicInfo },
  } = useContext(StudentViewStates);

  if (!academicInfo) {
    return null;
  }
  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <IoMdTrendingUp />
          Academic Progress
        </h3>
      </div>
      <div className="p-4 pt-0 sm:p-6">
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600">
              {academicInfo.overallProgress}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Overall Progress
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600">
              {academicInfo.courseCompleted}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Courses Completed
            </div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 text-center dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600">
              {academicInfo.quizzesProgressed}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Quizzes Completed
            </div>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 text-center dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600">
              {academicInfo.averageScore}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Score
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Overall Progress
            </label>
            <span className="text-sm text-gray-500">
              {academicInfo.overallProgress}%
            </span>
          </div>
          <Progress
            value={academicInfo.overallProgress}
            size={"3"}
            color={academicInfo.overallProgress > 40 ? "green" : "red"}
          />
        </div>
      </div>
    </div>
  );
}

export default AcademicProgress;
