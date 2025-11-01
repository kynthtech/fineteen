import clsx from "clsx";
import { useContext } from "react";
import { Button } from "@radix-ui/themes";
import { useLocation, useNavigate } from "react-router";
import { MdBook, MdHome, MdNotifications, MdPerson } from "react-icons/md";
import { PiExamBold } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { useSelector } from "react-redux";
import type { RootState } from "src/store/reduxStore";
import { StudentMeStates } from "../context";

function AsideMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const notification = useSelector(
    (state: RootState) => state.notificationSlice,
  );
  const { isSideMenu, setIsSideMenu } = useContext(StudentMeStates);

  const navigationItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: MdHome,
      isActive: pathname === "/dashboard",
    },
    {
      label: "Courses",
      href: "/dashboard/courses",
      icon: MdBook,
      isActive: pathname.startsWith("/dashboard/courses"),
    },
    {
      label: "Quizzes",
      href: "/dashboard/quizzes",
      icon: PiExamBold,
      isActive: pathname === "/dashboard/quizzes",
    },
    {
      label: "Notifications",
      href: "/dashboard/notifications",
      icon: MdNotifications,
      isActive: pathname === "/dashboard/notifications",
      badge: notification?.count || "",
    },
    {
      label: "Achievements",
      href: "/dashboard/achievements",
      icon: GiAchievement,
      isActive: pathname === "/dashboard/achievements",
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: MdPerson,
      isActive: pathname === "/dashboard/profile",
    },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    if (isSideMenu === true) {
      setIsSideMenu(false);
    }
  };

  return (
    <aside
      className={clsx(
        "fixed inset-y-0 top-14 left-0 z-40 max-h-full w-64 flex-shrink-0 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out sm:top-19 dark:border-gray-700 dark:bg-gray-800",
        isSideMenu ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="flex h-full flex-col pt-6">
        <nav className="flex-1 space-y-2 px-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={clsx(
                  "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition-all duration-200",
                  item.isActive
                    ? "border-r-2 border-cyan-500 bg-cyan-50 text-cyan-600 dark:border-cyan-400 dark:bg-cyan-900/30 dark:text-cyan-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto min-w-[20px] rounded-full bg-red-500 px-2 py-1 text-center text-xs text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="rounded-lg border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 dark:border-cyan-700/50 dark:from-cyan-900/20 dark:to-blue-900/20">
            <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Need Help?
            </h4>
            <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
              Get support from our team
            </p>
            <Button
              size="2"
              radius="medium"
              variant="solid"
              className="!w-full"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideMenu;
