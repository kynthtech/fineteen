import { Button } from "@radix-ui/themes";
import { IoMdAlert, IoMdCard } from "react-icons/io";
import { MdTrendingDown } from "react-icons/md";
import FinancialConfusion from "@assets/images/FinancialConfusion.png";
import useWindowSize from "@hooks/useWindowSize";

function LiteracyMatters() {
  const { isMobile } = useWindowSize();
  return (
    <section className="container mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl leading-tight font-bold text-gray-800 sm:text-4xl lg:text-5xl dark:text-white">
              Why Financial Literacy{/* */}{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="smd:text-lg text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Despite living in a digital age, most Indian teens are unprepared
              for financial independence. The lack of practical money management
              skills creates a generation vulnerable to debt, poor investment
              choices, and financial stress.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:size-12 dark:bg-red-900/30">
                <IoMdAlert size={isMobile ? 19 : 24} color="tomato" />
              </div>
              <div>
                <div className="mb-1 text-xl font-bold text-red-600 sm:text-3xl dark:text-red-400">
                  85%
                </div>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  of Indian teens lack basic budgeting skills and struggle with
                  money management
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:size-12 dark:bg-orange-900/30">
                <IoMdCard size={isMobile ? 19 : 24} color="orange" />
              </div>
              <div>
                <div className="mb-1 text-xl font-bold text-orange-600 sm:text-3xl dark:text-orange-400">
                  73%
                </div>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  don't understand credit scores and their impact on future
                  financial opportunities
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:size-12 dark:bg-red-900/30">
                <MdTrendingDown size={isMobile ? 19 : 24} color="tomato" />
              </div>
              <div>
                <div className="mb-1 text-xl font-bold text-red-600 sm:text-3xl dark:text-red-400">
                  91%
                </div>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  have never learned about investing, missing out on long-term
                  wealth building
                </p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
              But there's hope. With the right education and tools, we can
              change this narrative.
            </p>
            <Button
              variant="solid"
              radius="medium"
              color="tomato"
              className="!px-4 !py-5 !font-semibold"
            >
              Be Part of the Solution
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10">
            <img
              alt="Confused teen struggling with financial concepts and money management"
              loading="lazy"
              width={500}
              height={400}
              decoding="async"
              className="w-full"
              src={FinancialConfusion}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiteracyMatters;
