import Filter from "./components/Filter";
import Header from "./components/Header";
import Stats from "./components/Stats";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import ParticipantProvider, { ParticipantStates } from "./context";
import ParticipantTable from "./components/ParticipantTable";

function layout() {
  return (
    <ParticipantProvider>
      <Content />
    </ParticipantProvider>
  );
}

function Content() {
  const { setData } = useContext(ParticipantStates);
  const loaderResult = useLoaderData();

  useEffect(() => {
    setData(loaderResult);
  }, [loaderResult]);

  return (
    <div className="flex h-full flex-col space-y-6">
      <Header />
      <Stats />
      <Filter />
      <ParticipantTable />
    </div>
  );
}

export default layout;
