import BaseLayout from "@components/layouts/BaseLayout";
import Grids from "@components/others/Grids";
import Auth from "./Auth";

const layout = () => {
  return (
    <BaseLayout className="flex-1">
      <div className="relative flex flex-col overflow-x-hidden">
        <main className="container mx-auto mt-15 w-full px-4 md:px-12 lg:px-16">
          <section className="mt-1 flex w-full justify-center pb-10 sm:mt-9 md:mt-16">
            <div className="relative w-full max-w-md overflow-hidden">
              <div className="flex flex-col space-y-1.5 p-6 pb-6 text-center">
                <h3 className="sm: text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Admin login
                </h3>
              </div>
              <div className="relative z-10 rounded-lg bg-gray-50 p-3 sm:p-8 lg:p-10 dark:bg-transparent">
                <Auth />
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
