import { type RouteObject } from "react-router";

import Overview from "@pages/admin/overview/layout";

import Students from "@pages/admin/student/layout";
import StudentView from "@pages/admin/student/viewStudent/layout";

import Courses from "@pages/admin/courses/layout";
import ManageCourse from "@pages/admin/courses/addCourses/ManageCoursePage";

import Quizzes from "@pages/admin/quizzes/layout";
import ManageQuizzes from "@pages/admin/quizzes/manageQuizzes/ManageQuizzesPage";
import Participant from "@pages/admin/quizzes/participants/layout";

import Notification from "@pages/admin/notification/layout";

import Schools from "@pages/admin/schools/layout";
import useStudentApi from "@hooks/api/admin/useStudent.api";
import useSchoolApi from "@hooks/api/admin/useSchool.api";
import useCourseApi from "@hooks/api/admin/useCourse.api";
import useQuizApi from "@hooks/api/admin/useQuiz.api";
import useNotificationApi from "@hooks/api/admin/useNotification.api";
import useOverviewApi from "@hooks/api/admin/useOverview.api";

const AdminDashRoutes = (): RouteObject[] => {
  const { getStudents, getStudentById } = useStudentApi();
  const { getSchools } = useSchoolApi();
  const { getCourses, getCourseById } = useCourseApi();
  const { getQuizzes, getQuizById, getParticipants } = useQuizApi();
  const { getNotifications } = useNotificationApi();
  const { getOverviewData } = useOverviewApi();

  return [
    {
      path: "",
      element: <Overview />,
      loader: getOverviewData,
    },
    {
      path: "students",
      element: <Students />,
      loader: getStudents,
    },
    {
      path: "student/:id/view",
      element: <StudentView />,
      loader: getStudentById,
    },
    {
      path: "courses",
      element: <Courses />,
      loader: getCourses,
    },
    {
      path: "courses/create",
      element: <ManageCourse />,
    },
    {
      path: "courses/edit/:id",
      element: <ManageCourse />,
      loader: getCourseById,
    },
    {
      path: "quizzes",
      element: <Quizzes />,
      loader: getQuizzes,
    },
    {
      path: "quizzes/create",
      element: <ManageQuizzes />,
    },
    {
      path: "quizzes/edit/:id",
      element: <ManageQuizzes />,
      loader: getQuizById,
    },
    {
      path: "quizzes/:id/participants",
      element: <Participant />,
      loader: getParticipants,
    },
    {
      path: "notifications",
      element: <Notification />,
      loader: getNotifications,
    },
    {
      path: "schools",
      element: <Schools />,
      loader: getSchools,
    },
  ];
};

export default AdminDashRoutes;
