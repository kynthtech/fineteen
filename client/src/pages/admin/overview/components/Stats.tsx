import { useContext } from "react";
import { MdBook, MdPerson, MdQuiz, MdSchool } from "react-icons/md";
import { OverviewStates } from "../context";

const Stats = () => {
  const { data } = useContext(OverviewStates);

  if (!data.totalOverview) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 sm:p-6">
          <h3 className="text-sm font-medium tracking-tight text-green-600 dark:text-green-400">
            Total Students
          </h3>
          <MdPerson size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div className="p-4 pt-0 sm:p-6">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.totalOverview.totalStudents}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 sm:p-6">
          <h3 className="text-sm font-medium tracking-tight text-pink-600 dark:text-pink-400">
            Active Courses
          </h3>
          <MdBook size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div className="p-4 pt-0 sm:p-6">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.totalOverview.activeCourses}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 sm:p-6">
          <h3 className="text-sm font-medium tracking-tight text-cyan-600 dark:text-cyan-400">
            School Partners
          </h3>
          <MdSchool size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div className="p-4 pt-0 sm:p-6">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.totalOverview.totalSchool}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 sm:p-6">
          <h3 className="text-sm font-medium tracking-tight text-yellow-600 dark:text-yellow-400">
            Total Quizzes
          </h3>
          <MdQuiz size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div className="p-4 pt-0 sm:p-6">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.totalOverview.totalQuizzes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
