import Head from "@pages/others/terms/components/Head";
import AccountTermination from "@pages/others/terms/components/AccountTermination";
import UserResponsibilities from "@pages/others/terms/components/UserResponsibilities";
import LimitationsOfLiability from "@pages/others/terms/components/LimitationsOfLiability";
import BaseLayout from "@components/layouts/BaseLayout";
import ScrollTop from "@components/app/ScrollTop";

function layout() {
  return (
    <BaseLayout>
      <ScrollTop />
      <div className="relative flex flex-col">
        <main className="container mx-auto w-full px-4 md:px-12 lg:px-16">
          <section className="w-full pb-16">
            <Head />
          </section>
          <section className="w-full pb-16">
            <UserResponsibilities />
          </section>
          <section className="w-full pb-16">
            <LimitationsOfLiability />
          </section>
          <section className="w-full pb-16">
            <AccountTermination />
          </section>
        </main>
      </div>
    </BaseLayout>
  );
}

export default layout;
