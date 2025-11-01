import ScrollTop from "@components/app/ScrollTop";
import BaseLayout from "@components/layouts/BaseLayout";
import Head from "@pages/others/privacy/components/Head";
import HowWeUse from "@pages/others/privacy/components/HowWeUse";
import InfoWeCollect from "@pages/others/privacy/components/InfoWeCollect";
import YourPrivacyRights from "@pages/others/privacy/components/YourPrivacyRights";

function layout() {
  return (
    <BaseLayout>
      <ScrollTop />
      <div className="relative flex flex-col">
        <main className="relative container mx-auto w-full overflow-hidden px-4 md:px-12 lg:px-16">
          <section className="w-full pb-10 md:pb-16">
            <Head />
          </section>
          <section className="w-full pb-10 md:pb-16">
            <InfoWeCollect />
          </section>
          <section className="w-full pb-10 md:pb-16">
            <HowWeUse />
          </section>
          <section className="w-full pb-10 md:pb-16">
            <YourPrivacyRights />
          </section>
        </main>
      </div>
    </BaseLayout>
  );
}

export default layout;
