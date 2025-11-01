import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { BiBookOpen } from "react-icons/bi";
import { MdArrowLeft } from "react-icons/md";
import { Link } from "react-router";
import { QuizResultStates } from "../context";

function Header() {
  const { data } = useContext(QuizResultStates);
  return (
    <div className="flex flex-col justify-between sm:flex-row sm:items-center">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link to="/dashboard/quizzes">
          <Button variant="ghost" radius="medium" size="3">
            <MdArrowLeft className="h-4 w-4" />
            Back to Quizzes
          </Button>
        </Link>
        <div className="sm:ml-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quiz Results
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{data.quiz?.title}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-3 sm:mt-0">
        <Link to="/dashboard/courses">
          <Button variant="soft" radius="medium" size="3">
            <BiBookOpen className="h-4 w-4" />
            Continue Learning
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
