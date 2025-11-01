import { Button } from "@radix-ui/themes";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Quiz Management
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Create, manage, and analyze quizzes
        </p>
      </div>
      <div className="flex gap-3">
        <Link to="/admin/quizzes/create">
          <Button variant="soft" size="3" radius="medium">
            <MdAdd /> Create Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
