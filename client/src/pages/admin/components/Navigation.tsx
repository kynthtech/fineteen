import clsx from "clsx";
import Logo from "@assets/Logo";
import { AdminStates } from "../context";
import { RiMenuFill } from "react-icons/ri";
import useDarkMode from "@hooks/useDarkMode";
import { useContext, useRef, useState } from "react";
import useStudentAuth from "@hooks/api/auth/useStudent.auth";
import ActionModal from "@components/interfaces/ActionModal";
import { Badge, Button, IconButton } from "@radix-ui/themes";
import { IoMdLogOut, IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdArrowDropDown, MdOutlineShield } from "react-icons/md";

function Navigation() {
  const { toggle, currentTheme } = useDarkMode();
  const [isDropdownInfo, setIsDropdownInfo] = useState(false);
  const { isSideMenu, setIsSideMenu } = useContext(AdminStates);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLogoutDialog, setIsLogoutDialog] = useState(false);
  const { logout } = useStudentAuth();

  const handleOpenAside = () => {
    setIsSideMenu(!isSideMenu);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between px-4 py-1 sm:px-4 sm:py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <Badge variant="soft" size="2">
            <MdOutlineShield size={15} />
            Admin
          </Badge>
          <IconButton
            color="gray"
            variant="ghost"
            size={"3"}
            className={clsx(
              "!relative lg:!hidden",
              isSideMenu && "!bg-gray-100 dark:!bg-gray-700",
            )}
            onClick={handleOpenAside}
          >
            <RiMenuFill size={24} />
            <span className="pl-2">Menu</span>
          </IconButton>
        </div>
        <div className="flex items-center gap-3">
          <IconButton
            aria-label="Toggle theme"
            onClick={toggle}
            color="gray"
            variant="soft"
            size={"2"}
            className="!ml-4 !hidden lg:!flex"
          >
            {currentTheme == "light" ? (
              <IoMdMoon size={20} color="gray" />
            ) : (
              <IoMdSunny size={20} color="gray" />
            )}
          </IconButton>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsDropdownInfo(!isDropdownInfo)}
            >
              <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <img
                  className="aspect-square h-full w-full"
                  alt="Profile"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                />
              </span>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                  Finteen
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Admin
                </p>
              </div>
              <MdArrowDropDown size={20} color="gray" />
            </button>
            {isDropdownInfo && (
              <div className="w-uto absolute top-full right-0 mt-2 w-40 rounded-lg border-[1px] border-t-2 border-gray-700 border-t-cyan-600 bg-white dark:bg-gray-800">
                <div>
                  <div className="flex items-center gap-3 p-3">
                    <div className="size-8 overflow-hidden rounded-full border-4 border-white/20 shadow-lg sm:size-13">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Profile"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">Finteen</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-3 border-t-1 border-t-gray-700 p-4">
                    <Button
                      className="!w-full !text-left"
                      variant="ghost"
                      radius="medium"
                      color="red"
                      onClick={() => setIsLogoutDialog(true)}
                    >
                      <IoMdLogOut size={20} />
                      <span className="w-full p-1 text-left">Logout</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isLogoutDialog && (
          <ActionModal
            title="Logout"
            yesText="Logout"
            yesColor="red"
            no={() => setIsLogoutDialog(false)}
            yes={logout}
            description="Are you sure you want to logout ?"
          />
        )}
      </div>
    </header>
  );
}

export default Navigation;
