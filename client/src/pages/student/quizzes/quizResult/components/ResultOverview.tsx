import { Badge, Progress } from "@radix-ui/themes";
import { IoMdTrophy } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { QuizResultStates } from "../context";
import { useContext } from "react";

function ResultOverview() {
  const { data } = useContext(QuizResultStates);

  const getScoreColor = () => {
    if (data.score >= 90) return "text-green-600 dark:text-green-400";
    if (data.score >= data.quiz.passingScore)
      return "text-blue-600 dark:text-blue-400";
    return "text-red-600 dark:text-red-400";
  };

  const timeSpentMinutes = Math.floor(data.timeSpent / 60);
  const timeSpentSeconds = data.timeSpent % 60;

  return (
    <div className="space-y-4 text-center">
      <div className="flex items-center justify-center">
        {data.status === "passed" ? (
          <div className="flex size-14 items-center justify-center rounded-full bg-green-100 sm:size-16 dark:bg-green-900">
            <IoMdTrophy className="size-7 text-green-600 sm:size-8 dark:text-green-400" />
          </div>
        ) : (
          <div className="flex size-14 items-center justify-center rounded-full bg-red-100 sm:size-16 dark:bg-red-900">
            <MdErrorOutline className="size-7 text-red-600 sm:size-8 dark:text-red-400" />
          </div>
        )}
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          {data.status === "passed" ? "Congratulations!" : "Quiz Completed"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {data.status === "passed"
            ? "You've successfully passed the quiz!"
            : `You scored ${data.score}%. The passing score was ${data.quiz.passingScore}%.`}
        </p>
      </div>

      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className={`text-xl font-bold sm:text-4xl ${getScoreColor()}`}>
            {Math.floor(data.score)}%
          </div>
          <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            Your Score
          </p>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {data.result.correct}
          </div>
          <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            Correct Answers
          </p>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {timeSpentMinutes}:{timeSpentSeconds.toString().padStart(2, "0")}
          </div>
          <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            Time Spent
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-md">
        <Progress value={data.score} className="h-3" />
        <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>0%</span>
          <span>Passing: {data.quiz.passingScore}%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Badge size="2" color={data.status === "passed" ? "green" : "red"}>
          {data.status === "passed" ? "PASSED" : "NOT PASSED"}
        </Badge>
        <Badge size="2" color="gray">
          QUIZ COMPLETED - NO RETAKES
        </Badge>
      </div>

      {!(data.status === "passed") && (
        <div className="mt-4 rounded-lg bg-blue-50 p-3 sm:p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Study Recommendation:</strong> Review the course materials
            and focus on the topics you missed. Consider taking additional
            practice exercises before attempting other quizzes.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultOverview;
