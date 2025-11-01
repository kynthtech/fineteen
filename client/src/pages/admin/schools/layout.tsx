import { useContext, useEffect } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SchoolsList from "./components/SchoolsList";
import SchoolsProvider, { SchoolsStates } from "./context";
import { useLoaderData } from "react-router";

function layout() {
  return (
    <SchoolsProvider>
      <Content />
    </SchoolsProvider>
  );
}

function Content() {
  const { setData } = useContext(SchoolsStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="flex h-full flex-col space-y-6">
      <Header />
      <Filter />
      <SchoolsList />
    </div>
  );
}

export default layout;
