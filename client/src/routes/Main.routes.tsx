import { createBrowserRouter } from "react-router";

import HomeRootLayout from "../pages/home/RootLayout";
import AdminRootLayout from "@pages/admin/layout";
import StudentRootLayout from "@pages/student/layout";

import HomeRoutes from "./Home.routes";
import AdminDashRoutes from "./AdminDash.routes";
import { useMemo } from "react";
import useAdminAuth from "@hooks/api/auth/useAdmin.auth";
import useStudentAuth from "@hooks/api/auth/useStudent.auth";
import StudentDashRoutes from "./StudentDash.routes";

const MainRoutes = () => {
  const { adminMe } = useAdminAuth();
  const { studentMe } = useStudentAuth();
  const adminDashRoutes = AdminDashRoutes();
  const studentDashRoutes = StudentDashRoutes();

  const routes = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <HomeRootLayout />,
          children: [...HomeRoutes],
          // errorElement: <NotFound />,
        },
        {
          path: "/admin",
          element: <AdminRootLayout />,
          children: adminDashRoutes,
          loader: adminMe,
          shouldRevalidate: () => false,
          // errorElement: <NotFound />,
        },
        {
          path: "/dashboard",
          element: <StudentRootLayout />,
          children: studentDashRoutes,
          loader: studentMe,
          shouldRevalidate: () => false,
          // errorElement: <NotFound />,
        },
      ]),
    [],
  );

  return routes;
};

export default MainRoutes;
