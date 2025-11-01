import { Badge, Button } from "@radix-ui/themes";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router";
import { OverviewStates } from "../context";
import { useContext } from "react";
import { getDifficultyColor } from "@utils/colors/getDifficultyColor";

function LatestQuizzes() {
  const { data } = useContext(OverviewStates);
  if (!data.quizResults) {
    return null;
  }
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
          Latest Quizzes
        </h2>
        <Link to="/dashboard/quizzes">
          <Button radius="medium" size="2" variant="solid">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.quizResults.map((quiz) => (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-700/50">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  {quiz.title}
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  {quiz.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MdAccessTime size={18} />
                  <span>{quiz.timeLimit}m</span>
                </div>

                <Badge
                  color={getDifficultyColor(quiz.difficulty)}
                  className="capitalize"
                >
                  {quiz.difficulty}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Link to={`/dashboard/quizzes/browse?search=${quiz.title}`}>
                  <Button variant="solid" size="3" radius="medium">
                    Start Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.quizResults.length === 0 && (
        <p className="text-gray-600 sm:mt-4 dark:text-gray-400">
          No quizzes found
        </p>
      )}
    </div>
  );
}

export default LatestQuizzes;
