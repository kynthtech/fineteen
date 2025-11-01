import { useContext } from "react";
import { LessonDataStates } from "./context";
import { MdFilePresent, MdOutlineFileDownload } from "react-icons/md";

function Resources() {
  const { currentLesson } = useContext(LessonDataStates);
  const handleDownload = (filename: string) => {
    window.open(
      `${
        import.meta.env.VITE_API_URL
      }/api/other/uploads?type=resource&filename=${filename}`,
      "_blank",
    );
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-3 font-bold text-gray-900 sm:mb-4 dark:text-white">
        Resources
      </h3>
      {(currentLesson.resources?.length === 0 || !currentLesson.resources) && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          No resources found
        </p>
      )}
      <div className="space-y-3">
        {currentLesson.resources?.map((resource) => (
          <div
            className="flex w-full items-center gap-3 rounded-lg bg-gray-50 p-2 transition-colors duration-200 hover:bg-gray-100 sm:p-3 dark:bg-gray-700/50 dark:hover:bg-gray-700"
            onClick={() => handleDownload(resource.name as string)}
          >
            <MdFilePresent
              className="text-gray-600 dark:text-gray-400"
              size={24}
            />
            <div className="w-5 flex-1 text-left">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {resource.name as string}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {resource.size}
              </p>
            </div>
            <MdOutlineFileDownload size={20} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
