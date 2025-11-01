import Faq from "@pages/others/contact/components/Faq";
import FollowUs from "@pages/others/contact/components//FollowUs";
import GetInTouch from "@pages/others/contact/components/GetInTouch";
import Head from "@pages/others/contact/components/Head";
import OurOffice from "@pages/others/contact/components/OurOffice";
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
            <GetInTouch />
          </section>
          <section className="w-full pb-16">
            <OurOffice />
          </section>
          <section className="w-full pb-16">
            <FollowUs />
          </section>
          <section className="w-full pb-16">
            <Faq />
          </section>
        </main>
      </div>
    </BaseLayout>
  );
}

export default layout;
