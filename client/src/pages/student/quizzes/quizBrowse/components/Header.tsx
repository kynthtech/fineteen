import { Button } from "@radix-ui/themes";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Browse quizzes
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Explore our catalog and attempt in quizzes that interest you
        </p>
      </div>
      <Link to="/dashboard/quizzes">
        <Button variant="soft" size="3" radius="medium">
          My Quizzes
        </Button>
      </Link>
    </div>
  );
}

export default Header;
