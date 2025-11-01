import { useContext, useEffect } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import NotificationItems from "./components/NotificationItems";
import NotificationProvider, { NotificationStates } from "./context";
import { useLoaderData } from "react-router";

function layout() {
  return (
    <NotificationProvider>
      <Content />
    </NotificationProvider>
  );
}

function Content() {
  const { setData } = useContext(NotificationStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="flex h-full flex-col space-y-6">
      <Header />
      <Filter />
      <NotificationItems />
    </div>
  );
}

export default layout;
