import { useContext, useEffect } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import StudentProvider, { StudentStates } from "./context";
import StudentAdd from "./components/StudentAdd";
import { useLoaderData } from "react-router";

function layout() {
  return (
    <StudentProvider>
      <Content />
    </StudentProvider>
  );
}

function Content() {
  const { isAddModalOpen, setData } = useContext(StudentStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="flex h-full flex-col space-y-6">
      <Header />
      <Filter />
      <StudentsList />
      {isAddModalOpen.isOpen && <StudentAdd />}
    </div>
  );
}

export default layout;
