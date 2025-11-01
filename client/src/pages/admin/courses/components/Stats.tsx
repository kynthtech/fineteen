import { IoMdEye } from "react-icons/io";
import { MdPerson, MdStar } from "react-icons/md";
import { CoursesStates } from "../context";
import { useContext } from "react";
import useWindowSize from "@hooks/useWindowSize";

const Stats = () => {
  const { data } = useContext(CoursesStates);
  const { isMobile } = useWindowSize();

  if (!data.stats) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Courses
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.stats.totalCreatedCourses}
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-100 sm:size-12 dark:bg-cyan-900">
              <IoMdEye
                className="text-cyan-600 dark:text-cyan-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Published
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.stats.totalPublicCourses}
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 sm:size-12 dark:bg-green-900">
              <MdStar
                className="text-green-600 dark:text-green-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Students
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {data.stats.totalEnrolled}
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 sm:size-12 dark:bg-blue-900">
              <MdPerson
                className="text-blue-600 dark:text-blue-400"
                size={isMobile ? 19 : 24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
