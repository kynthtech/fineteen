import { IoMdClose } from "react-icons/io";
import { Button, IconButton } from "@radix-ui/themes";
import { FaRegClock } from "react-icons/fa";
import { useContext } from "react";
import { NotificationStates } from "../context";
import { Link } from "react-router";
import { getIcon, getIconColor } from "@utils/colors/NotificationsIconColor";
import ItemsNotFound from "@components/others/ItemsNotFound";

function NotificationView() {
  const { data } = useContext(NotificationStates);

  if (!data.notifications) {
    return null;
  }

  return (
    <div className="flex-1">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="border-b border-gray-200 p-3 sm:p-6 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
            Recent Notifications
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {data?.notifications?.map((notification) => {
            return (
              <div
                key={notification._id}
                className="p-4 transition-colors duration-200 hover:bg-gray-50 sm:p-6 dark:hover:bg-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <IconButton
                    radius="medium"
                    variant="solid"
                    size={"4"}
                    color={getIconColor(notification.type)}
                  >
                    {getIcon(notification.type)}
                  </IconButton>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {notification.type}
                          </h3>
                          {notification.type === "Meeting Link" && (
                            <div className="ounded-full size-2 animate-pulse rounded-full bg-red-400" />
                          )}
                        </div>
                        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <FaRegClock className="h-3 w-3" />
                          {new Date(notification.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-5 self-center">
                        {notification?.link && (
                          <Button
                            size="2"
                            className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                            radius="medium"
                            variant="soft"
                            color="gray"
                          >
                            <Link
                              to={notification.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open Link
                            </Link>
                          </Button>
                        )}
                        {notification?.course && (
                          <Button
                            size="2"
                            className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                            radius="medium"
                            variant="soft"
                            color="gray"
                          >
                            <Link
                              to={`/dashboard/courses/browse?search=${notification?.course}`}
                            >
                              View Course
                            </Link>
                          </Button>
                        )}
                        {notification?.quiz && (
                          <Button
                            size="2"
                            className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                            radius="medium"
                            variant="soft"
                            color="gray"
                          >
                            <Link
                              to={`/dashboard/quizzes/browse?search=${notification?.quiz}`}
                            >
                              Take Quiz
                            </Link>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="3"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <IoMdClose className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {data.notifications.length == 0 && (
        <ItemsNotFound
          type="notification"
          className="h-full"
          title="You have no notifications"
        />
      )}
    </div>
  );
}

export default NotificationView;
