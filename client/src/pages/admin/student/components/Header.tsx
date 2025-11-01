import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { StudentStates } from "../context";

function Header() {
  const { setIsAddModalOpen } = useContext(StudentStates);

  return (
    <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Students Management
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage student accounts, progress, and enrollments
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() =>
            setIsAddModalOpen(({ isOpen, editData }) => ({
              isOpen: !isOpen,
              editData,
            }))
          }
          variant="soft"
          size="3"
          radius="medium"
        >
          <MdAdd /> Add Student
        </Button>
      </div>
    </div>
  );
}

export default Header;
