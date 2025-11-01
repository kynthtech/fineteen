import { Badge } from "@radix-ui/themes";
import { useContext } from "react";
import { ManageCoursesContextStates } from "../ManageCourseContext";

function CourseSummary() {
  const { watch } = useContext(ManageCoursesContextStates);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-700/10">
      <h3 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
        Course Summary
      </h3>
      <div className="mt-4 space-y-3 text-sm sm:mt-7">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Total Lessons:
          </span>
          <span className="font-medium">{watch("lessons").length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Category:</span>
          <span className="font-medium">{watch("category") || "Not set"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
          <span className="font-medium">
            {watch("difficulty") || "Not set"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Duration:</span>
          <span className="font-medium">{watch("duration") || "Not set"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Status:</span>
          <Badge
            size="3"
            className="capitalize"
            color={watch("visibility") === "public" ? "green" : "red"}
          >
            {watch("visibility") || "Not set"}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default CourseSummary;
