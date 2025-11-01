import clsx from "clsx";
import Logo from "@assets/Logo";
import { useState } from "react";
import { Link } from "react-router";
import useDarkMode from "@hooks/useDarkMode";
import { Button, IconButton } from "@radix-ui/themes";
import useCheckAuthUi from "@hooks/api/others/useCheckAuthUi";
import { IoMdClose, IoMdMenu, IoMdMoon, IoMdSunny } from "react-icons/io";

function Navigation() {
  const { toggle, currentTheme } = useDarkMode();
  const [openMenu, setOpenMenu] = useState(false);
  const { isAdminLogin, isStudentLogin } = useCheckAuthUi();

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <nav className="sticky top-0 z-50 flex w-full justify-center border border-gray-300/50 bg-gray-50/80 backdrop-blur-lg dark:border-gray-600/50 dark:bg-gray-800/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-5 transition-all duration-100 md:px-16">
        <Logo from="home" />
        <div
          className={clsx(
            "absolute top-16 left-0 flex w-full flex-col items-center gap-5 space-x-1 border-b border-gray-200 bg-gray-100 p-5 lg:static lg:w-auto lg:flex-row lg:border-0 lg:bg-transparent lg:p-0 dark:border-gray-700 dark:bg-gray-800 lg:dark:bg-transparent",
            openMenu ? "block" : "hidden lg:flex",
          )}
        >
          <Link
            to={{ pathname: "/", hash: "#features" }}
            className="w-full lg:w-auto"
          >
            <Button
              variant="ghost"
              radius="full"
              color="gray"
              className="!lg:w-auto !w-full !px-4 !py-2 !font-semibold"
              highContrast
              onClick={toggleMenu}
            >
              Features
            </Button>
          </Link>
          <Link to="/#testimonial" className="w-full lg:w-auto">
            <Button
              variant="ghost"
              radius="full"
              highContrast
              color="gray"
              className="!lg:w-auto !w-full !px-4 !py-2 !font-semibold"
              onClick={toggleMenu}
            >
              Testimonial
            </Button>
          </Link>
          <Link to="/contact" className="w-full lg:w-auto">
            <Button
              variant="ghost"
              radius="full"
              highContrast
              color="gray"
              className="!lg:w-auto !w-full !px-4 !py-2 !font-semibold"
              onClick={toggleMenu}
            >
              Contact
            </Button>
          </Link>
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
          {!(isAdminLogin || isStudentLogin) && (
            <Link
              to="auth?action=register-student"
              className="w-full lg:w-auto"
            >
              <Button
                className="!lg:w-auto !w-full !px-6 !py-4"
                radius="medium"
              >
                Get Started
              </Button>
            </Link>
          )}
          {isStudentLogin && (
            <Link to="/dashboard" className="w-full lg:w-auto">
              <Button
                className="!lg:w-auto !w-full !px-6 !py-4"
                radius="medium"
              >
                Dashboard
              </Button>
            </Link>
          )}
          {isAdminLogin && (
            <Link to="/admin" prefetch="intent" className="w-full lg:w-auto">
              <Button
                className="!lg:w-auto !w-full !px-6 !py-4"
                radius="medium"
              >
                Admin
              </Button>
            </Link>
          )}
        </div>
        <div className="lg:!hidden">
          <IconButton
            aria-label="Toggle theme"
            onClick={toggle}
            color="gray"
            variant="soft"
            radius="medium"
            size={"2"}
            className="!ml-4"
          >
            {currentTheme == "light" ? (
              <IoMdMoon size={20} color="gray" />
            ) : (
              <IoMdSunny size={20} color="gray" />
            )}
          </IconButton>
          <IconButton
            size={"2"}
            color="gray"
            variant="soft"
            radius="medium"
            className="!ml-4"
            onClick={toggleMenu}
            aria-label="Toggle theme"
          >
            {openMenu != true ? (
              <IoMdMenu size={20} color="gray" />
            ) : (
              <IoMdClose size={20} color="gray" />
            )}
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
