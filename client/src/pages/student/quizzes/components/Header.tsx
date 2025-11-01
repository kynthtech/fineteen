import { Button } from "@radix-ui/themes";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          My Quizzes
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Test your financial knowledge and track your progress
        </p>
      </div>
      <Link to="/dashboard/quizzes/browse">
        <Button variant="soft" size="3" radius="medium">
          Browse Quizzes <MdOpenInNew />
        </Button>
      </Link>
    </div>
  );
}

export default Header;
