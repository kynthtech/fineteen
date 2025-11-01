import { Button } from "@radix-ui/themes";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening on your platform today.
        </p>
      </div>
      <div className="mt-4 flex gap-3 sm:mt-0">
        <Link to="/admin/notifications">
          <Button variant="soft" size="3" radius="medium">
            <MdAdd /> Send Notification
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
