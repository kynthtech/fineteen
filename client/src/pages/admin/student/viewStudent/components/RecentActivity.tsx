import { useContext } from "react";
import { StudentViewStates } from "../context";
import { MdAccessTime, MdVideocam } from "react-icons/md";
import { IconButton } from "@radix-ui/themes";
import { formatTimeAgo } from "@utils/format/formatTimeAgo";
import { FaTrophy } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

function RecentActivity() {
  const {
    data: { recentActivities },
  } = useContext(StudentViewStates);

  if (!recentActivities) {
    return null;
  }

  const activitiesIcon = (name: string) => {
    const nameLower = name.toLowerCase();

    switch (nameLower) {
      case "course":
        return <MdVideocam size={20} />;
      case "quiz":
        return <FaTrophy size={20} />;
      case "streak":
        return <FiTarget size={20} />;
      default:
        return <MdAccessTime size={20} />;
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <MdAccessTime size={24} />
          Recent Activity
        </h3>
      </div>
      <div className="p-4 pt-0 sm:p-6">
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div className="flex items-start gap-3 space-x-3 rounded-lg bg-gray-50 p-2 pl-0 sm:p-3 dark:bg-gray-800">
              <IconButton color={activity.color} variant="soft" size={"3"}>
                {activitiesIcon(activity.name)}
              </IconButton>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formatTimeAgo(activity.createdAt)}
                </p>
              </div>
            </div>
          ))}
          {recentActivities.length == 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No recent activity
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
