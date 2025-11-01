import { Button } from "@radix-ui/themes";
import { Link } from "react-router";

function ResultNotFound() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Results Not Found
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          We couldn't find your quiz results. Please try taking the quiz again.
        </p>
        <Link to="/dashboard/quizzes">
          <Button variant="soft" radius="medium" size="3">
            Back to Quizzes
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ResultNotFound;
