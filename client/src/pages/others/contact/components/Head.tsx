import { BiChevronRight, BiHome } from "react-icons/bi";
import Grids from "@components/others/Grids";
import { Link } from "react-router";

function Head() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-4xl space-y-6 text-center">
          <div className="relative z-10 mb-8 flex items-center justify-center space-x-2 text-sm text-gray-700 dark:text-gray-400">
            <Link
              to="/"
              className="flex cursor-pointer gap-1 transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <BiHome size={17} />
              Home
            </Link>
            <BiChevronRight size={30} />
            <span className="font-medium text-gray-900 dark:text-white">
              Contact Us
            </span>
          </div>
          <Grids variant="mask" />
          <h1 className="text-4xl leading-tight font-bold text-cyan-500 sm:text-5xl lg:text-6xl dark:text-white">
            Contact Us
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
            Get in touch with our team. We're here to help with any questions
            about FinTeen's financial literacy platform.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 backdrop-blur-sm sm:px-6 sm:py-3 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="size-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Last updated: July 1, 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
