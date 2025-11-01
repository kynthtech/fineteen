import { MdOutlineVideocamOff } from "react-icons/md";

function LessonNotFound() {
  return (
    <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row">
        <div className="flex-shrink-0">
          <div className="flex h-20 w-36 animate-[pulse_2s_infinite] items-center justify-center rounded-lg bg-gray-100 shadow-inner md:h-30 md:w-48 dark:bg-gray-700/50">
            <MdOutlineVideocamOff
              size={48}
              className="text-gray-300 dark:text-gray-600"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-gray-100">
            No lesson found
          </h3>
          <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
            We couldn't find a recorded video for the current lesson. You can
            start the lesson from 'Course Content' section.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LessonNotFound;
