import HomeLayout from "@pages/home/layout";
import TermsLayout from "@pages/others/terms/layout";
import ContactLayout from "@pages/others/contact/layout";
import PrivacyLayout from "@pages/others/privacy/layout";
import AuthStudent from "@pages/auth/studentAuth/layout";
import SchoolRegister from "@pages/auth/schoolAuth/layout";
import AdminLogin from "@pages/auth/adminAuth/layout";
import { type RouteObject } from "react-router";

const HomeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "contact",
    element: <ContactLayout />,
  },
  {
    path: "privacy",
    element: <PrivacyLayout />,
  },
  {
    path: "terms",
    element: <TermsLayout />,
  },
  {
    path: "auth",
    element: <AuthStudent />,
  },

  {
    path: "auth-register-school",
    element: <SchoolRegister />,
  },
  { path: "admin-login", element: <AdminLogin /> },
];

export default HomeRoutes;
