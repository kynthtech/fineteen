import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import StudentViewProvider, { StudentViewStates } from "./context";
import Header from "./components/Header";
import Achievements from "./components/Achievements";
import RecentActivity from "./components/RecentActivity";
import PersonalInformation from "./components/PersonalInformation";
import AcademicProgress from "./components/AcademicProgress";

function layout() {
  return (
    <StudentViewProvider>
      <Content />
    </StudentViewProvider>
  );
}

function Content() {
  const { setData } = useContext(StudentViewStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Header />
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        <div className="space-y-4 sm:space-y-6 lg:col-span-2">
          <PersonalInformation />
          <AcademicProgress />
        </div>
        <div className="space-y-4 sm:space-y-6">
          <Achievements />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default layout;
