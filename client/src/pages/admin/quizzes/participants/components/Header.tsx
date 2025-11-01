import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { MdArrowLeft } from "react-icons/md";
import { Link } from "react-router";
import { ParticipantStates } from "../context";

function Header() {
  const { data } = useContext(ParticipantStates);

  if (!data.quizData) {
    return null;
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link to="/admin/quizzes?page=1" className="mt-3 ml-3 sm:mt-0 sm:ml-0">
          <Button variant="ghost" radius="medium" size="3">
            <MdArrowLeft /> Back to Quizzes
          </Button>
        </Link>
        <div className="ml-3">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
            Participant Results
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {data.quizData.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
