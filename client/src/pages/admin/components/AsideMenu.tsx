import clsx from "clsx";
import { useContext } from "react";
import { Button } from "@radix-ui/themes";
import { AdminStates } from "../context";
import { PiExamBold } from "react-icons/pi";
import { BiSolidSchool } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import { MdBook, MdHome, MdPerson, MdNotifications } from "react-icons/md";

function AsideMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isSideMenu, setIsSideMenu } = useContext(AdminStates);
  const navigationItems = [
    {
      label: "Overview",
      href: "/admin",
      icon: MdHome,
      isActive: pathname === "/admin",
    },
    {
      label: "Students",
      href: "/admin/students?page=1",
      icon: MdPerson,
      isActive: pathname.includes("/admin/student"),
    },
    {
      label: "Courses",
      href: "/admin/courses?page=1",
      icon: MdBook,
      isActive: pathname.includes("/admin/courses"),
    },
    {
      label: "Quizzes",
      href: "/admin/quizzes?page=1",
      icon: PiExamBold,
      isActive: pathname.includes("/admin/quizzes"),
    },
    {
      label: "Notifications",
      href: "/admin/notifications?page=1",
      icon: MdNotifications,
      isActive: pathname.includes("/admin/notifications"),
    },
    {
      label: "Schools",
      href: "/admin/schools?page=1",
      icon: BiSolidSchool,
      isActive: pathname.includes("/admin/schools"),
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
