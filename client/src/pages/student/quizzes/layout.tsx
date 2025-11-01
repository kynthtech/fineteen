import { useContext, useEffect } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Stats from "./components/Stats";
import QuizzesProvider, { QuizzesStates } from "./context";
import { useLoaderData } from "react-router";

function layout() {
  return (
    <QuizzesProvider>
      <Content />
    </QuizzesProvider>
  );
}

function Content() {
  const { setData } = useContext(QuizzesStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="flex h-full flex-col space-y-6">
      <Header />
      <Stats />
      <Filter />
      <Quizzes />
    </div>
  );
}

export default layout;
