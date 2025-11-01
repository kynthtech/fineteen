import { useEffect } from "react";
import Grids from "@components/others/Grids";
import Mentor from "@pages/home/components/Mentor";
import BaseLayout from "@components/layouts/BaseLayout";
import GetStarted from "@pages/home/components/GetStarted";
import Testimonial from "@pages/home/components/Testimonial";
import HeroSection from "@pages/home/components/HeroSection";
import Introduction from "@pages/home/components/Introduction";
import LiteracyMatters from "@pages/home/components/LiteracyMatters";

function Layout() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  return (
    <BaseLayout>
      <div className="relative flex flex-col overflow-x-hidden">
        <Grids variant="perspective" />
        <main className="container mx-auto mt-15 w-full px-4 md:px-12 lg:px-16">
          <HeroSection />
          <section className="mt-16 w-full pb-10 md:mt-16 md:pb-16">
            <Mentor />
          </section>
          <section className="mt-16 pb-10 md:mt-24 md:pb-16">
            <LiteracyMatters />
          </section>
          <section id="features" className="mt-16 pb-10 md:mt-24 md:pb-16">
            <Introduction />
          </section>
          <section id="logins" className="mt-16 pb-10 md:mt-24 md:pb-16">
            <GetStarted />
          </section>
          <section
            id="testimonial"
            className="mt-16 mb-20 pb-10 md:mt-24 md:pb-16"
          >
            <Testimonial />
          </section>
        </main>
      </div>
    </BaseLayout>
  );
}

export default Layout;
