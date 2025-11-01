import useWindowSize from "@hooks/useWindowSize";
import { Button } from "@radix-ui/themes";
import { MdOutlineMenuBook, MdOutlineSchool } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router";

function GetStarted() {
  const { isMobile } = useWindowSize();
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-16 space-y-6 text-center">
        <h2 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Get Started with{/* */}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-cyan-500">
            FinTeen
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg dark:text-gray-400">
          Choose your path to financial literacy. Whether you're a school,
          student, or just exploring, we have the perfect starting point for
          you.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        <div className="group relative xl:w-[24pc]">
          <div className="relative rounded-3xl border-0 border-b-4 border-purple-200 bg-purple-100/30 p-8 transition-all duration-300 group-hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="space-y-6 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-purple-500 shadow-lg transition-transform duration-300 group-hover:scale-110 md:size-20">
                <MdOutlineSchool size={isMobile ? 30 : 40} color="white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                  Register Your School
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Want to bring FinTeen to your school? Join our partner network
                  today.
                </p>
              </div>
              <Link to="/auth-register-school">
                <Button
                  size="4"
                  variant="soft"
                  color="purple"
                  radius="medium"
                  className="!w-full !cursor-pointer"
                >
                  Register School
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="group relative xl:w-[24pc]">
          <div className="relative rounded-3xl border-0 border-b-4 border-teal-200 bg-teal-100/30 p-8 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="space-y-6 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-teal-500 shadow-lg transition-transform duration-300 group-hover:scale-110 md:size-20">
                <PiStudentFill size={isMobile ? 30 : 40} color="white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                  Student Registration
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Are you a student at a registered school? Create your learning
                  account here.
                </p>
              </div>
              <Link to="/auth?action=register-student">
                <Button
                  size="4"
                  variant="soft"
                  color="teal"
                  radius="medium"
                  className="!w-full !cursor-pointer"
                >
                  Register as Student
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="group relative xl:w-[24pc]">
          <div className="relative rounded-3xl border-0 border-b-4 border-pink-200 bg-pink-50 p-8 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="space-y-6 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-pink-500 shadow-lg transition-transform duration-300 group-hover:scale-110 md:size-20">
                <MdOutlineMenuBook size={isMobile ? 30 : 40} color="white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                  Explore FinTeen Platform
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Discover our engaging finance lessons, tools, and games.
                </p>
              </div>
              <Button
                size="4"
                variant="soft"
                color="pink"
                radius="medium"
                className="!w-full !cursor-pointer"
              >
                Go to Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
