import Grids from "@components/others/Grids";

import Registration from "./components/Registration";
import BaseLayout from "@components/layouts/BaseLayout";
import { useSearchParams } from "react-router";
import Login from "./components/Login";
import { useEffect } from "react";
import { navigateTo } from "@servicesOther/navigationService";

const layout = () => {
  const [searchParam] = useSearchParams();
  const action = searchParam.get("action");

  useEffect(() => {
    if (
      !action ||
      (action !== "register-student" && action !== "login-student")
    ) {
      navigateTo("/");
    }
  }, [action]);

  return (
    <BaseLayout>
      <div className="relative flex flex-col overflow-x-hidden">
        <main className="container mx-auto mt-1 w-full px-4 sm:mt-9 md:mt-15 md:px-12 lg:px-16">
          <section className="mt-1 flex w-full justify-center pb-10 sm:mt-9 md:mt-16 md:pb-16">
            <div className="relative w-full max-w-2xl overflow-hidden">
              <div className="flex flex-col space-y-1.5 p-6 pb-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                  Student{" "}
                  {action === "register-student" ? "Registration" : "Login"}
                </h3>
              </div>
              <div className="relative z-10 rounded-lg bg-gray-50 p-3 sm:p-8 lg:p-10 dark:bg-transparent">
                {action === "register-student" && <Registration />}
                {action === "login-student" && <Login />}
              </div>
              <Grids variant="mask" height="100%" />
            </div>
          </section>
        </main>
      </div>
    </BaseLayout>
  );
};

export default layout;
