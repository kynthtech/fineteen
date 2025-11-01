import { Button } from "@radix-ui/themes";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Course Management
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Manage courses, lessons, and educational content
        </p>
      </div>
      <Link to="/admin/courses/create">
        <Button variant="soft" size="3" radius="medium">
          <MdAdd /> Add Course
        </Button>
      </Link>
    </div>
  );
}

export default Header;
