import { Outlet } from "react-router";
import AdminProvider from "./context";
import AsideMenu from "./components/AsideMenu";
import Navigation from "./components/Navigation";
import BaseLayout from "@components/layouts/BaseLayout";
import { NavigationSetter } from "@components/app/NavigationSetter";

function layout() {
  return (
    <AdminProvider>
      <BaseLayout className="bg-gray-50">
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <div className="flex flex-1">
            <AsideMenu />
            <main className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-500 flex-1 overflow-hidden p-3 sm:p-6 lg:ml-64">
              <Outlet />
            </main>
          </div>
        </div>
        <NavigationSetter />
      </BaseLayout>
    </AdminProvider>
  );
}

export default layout;
