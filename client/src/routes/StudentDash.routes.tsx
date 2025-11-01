import { type RouteObject } from "react-router";

import Overview from "@pages/student/overview/layout";

import Courses from "@pages/student/courses/layout";
import CourseView from "@pages/student/courses/viewCourse/layout";
import CoursesBrowse from "@pages/student/courses/browseCourses/layout";

import Quizzes from "@pages/student/quizzes/layout";
import QuizzesBrowse from "@pages/student/quizzes/quizBrowse/layout";
import QuizAttempt from "@pages/student/quizzes/quizAttempt/layout";
import QuizResults from "@pages/student/quizzes/quizResult/layout";

import Notification from "@pages/student/notification/layout";
import Profile from "@pages/student/profile/layout";
import Achievements from "@pages/student/achievements/layout";

import useQuizApi from "@hooks/api/student/useQuiz.api";
import useCourseApi from "@hooks/api/student/useCourse.api";
import useNotificationApi from "@hooks/api/student/useNotification.api";
import useOverviewApi from "@hooks/api/student/useOverview.api";

const StudentDashRoutes = (): RouteObject[] => {
  const { getCourses, getEnrolledCourses, getCourseById } = useCourseApi();
  const { getQuizzes, quizAttempt, getQuizResult, getAttemptQuizzes } =
    useQuizApi();
  const { getNotifications } = useNotificationApi();
  const { getOverviewData, getAchievements } = useOverviewApi();

  return [
    {
      path: "",
      element: <Overview />,
      loader: getOverviewData,
    },
    {
      path: "courses",
      element: <Courses />,
      loader: getEnrolledCourses,
    },
    {
      path: "courses/:id",
      element: <CourseView />,
      loader: getCourseById,
    },
    {
      path: "courses/browse",
      element: <CoursesBrowse />,
      loader: getCourses,
    },
    {
      path: "quizzes",
      element: <Quizzes />,
      loader: getAttemptQuizzes,
    },
    {
      path: "quizzes/browse",
      element: <QuizzesBrowse />,
      loader: getQuizzes,
    },
    {
      path: "quiz/:id/attempt",
      element: <QuizAttempt />,
      loader: quizAttempt,
    },
    {
      path: "quiz/:id/results",
      element: <QuizResults />,
      loader: getQuizResult,
    },
    {
      path: "notifications",
      element: <Notification />,
      loader: getNotifications,
    },
    {
      path: "achievements",
      element: <Achievements />,
      loader: getAchievements,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ];
};

export default StudentDashRoutes;
