import { Link } from "react-router";
import { Button } from "@radix-ui/themes";
import { MdPlayArrow } from "react-icons/md";

function Welcome() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white sm:p-8 dark:from-cyan-600 dark:to-blue-700">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Welcome back ! 👋
          </h1>
          <p className="text-base text-cyan-100 sm:text-lg dark:text-cyan-200">
            Ready to continue your financial literacy journey?
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to="/dashboard/courses" className="w-full sm:w-auto">
            <Button
              className="!w-full !border !border-white/30 !bg-white/20 !text-white hover:!bg-white/30 sm:w-auto"
              radius="medium"
              size="3"
            >
              <MdPlayArrow className="mr-2 h-4 w-4" />
              Continue Learning
            </Button>
          </Link>
          <Link to="/dashboard/quizzes/browse" className="w-full sm:w-auto">
            <Button
              variant="outline"
              radius="medium"
              color="gray"
              className="!w-full !border-white/30 !bg-transparent !text-white hover:!bg-white/10 sm:w-auto"
              size="3"
            >
              Browse Quizzes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
