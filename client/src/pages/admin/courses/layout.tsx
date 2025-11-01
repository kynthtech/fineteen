import Stats from "./components/Stats";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { useLoaderData } from "react-router";
import { useContext, useEffect } from "react";
import Courses from "./components/CourseItems";
import CoursesProvider, { CoursesStates } from "./context";

function layout() {
  return (
    <CoursesProvider>
      <Content />
    </CoursesProvider>
  );
}

function Content() {
  const { setData } = useContext(CoursesStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="flex h-full flex-col space-y-6">
      <Header />
      <Stats />
      <Filter />
      <Courses />
    </div>
  );
}

export default layout;
