import clsx from "clsx";
import { useState } from "react";
import DemoVideo from "./DemoVideo";
import { Button } from "@radix-ui/themes";
import { LuPiggyBank } from "react-icons/lu";
import { TbTarget } from "react-icons/tb";
import useWindowSize from "@hooks/useWindowSize";
import { MdOutlineTrendingUp, MdStar } from "react-icons/md";

const Introduction = () => {
  const { isMobile } = useWindowSize();
  const [isVisibleDemoVideo, setIsVisibleDemoVideo] = useState(false);
  const cards = [
    {
      title: "Interactive Courses",
      description:
        "Gamified lessons that make learning about budgeting, saving, and investing as engaging as your favorite mobile game.",
      color: {
        div: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50",
        icon: "bg-blue-500 dark:bg-blue-400",
      },
      icon: TbTarget,
    },
    {
      title: "Expert-Guided Content",
      description:
        "Learn from certified financial advisors and successful entrepreneurs who understand the Indian financial landscape.",
      color: {
        div: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700/50",
        icon: "bg-green-500 dark:bg-green-400",
      },
      icon: MdStar,
    },
    {
      title: "Real-world Projects",
      description:
        "Apply your knowledge through practical projects like creating budgets, planning investments, and managing virtual portfolios.",
      color: {
        div: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700/50",
        icon: "bg-purple-500 dark:bg-purple-400",
      },
      icon: MdOutlineTrendingUp,
    },
    {
      title: "Practical Tools",
      description:
        "Access real-life tools and resources to help you make informed financial decisions.",
      color: {
        div: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700/50",
        icon: "bg-orange-500 dark:bg-orange-400",
      },
      icon: LuPiggyBank,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 space-y-6 text-center md:mb-16">
        <h2 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Introducing{/* */}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-cyan-500">
            FinTeen
          </span>
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-600 sm:text-xl md:text-lg dark:text-gray-400">
          FinTeen transforms financial education through engaging real-life
          stories, interactive games, and expert-guided videos. We make money
          management fun, practical, and relevant to today's teens, building
          confidence one lesson at a time.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {cards.map((item) => (
          <div
            key={item.title}
            className={clsx(
              "bg-card group rounded-2xl bg-gradient-to-br p-5 shadow-sm transition-all duration-300 select-none hover:scale-105 md:p-6",
              item.color.div,
            )}
          >
            <div className="space-y-4">
              <div
                className={clsx(
                  "flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:size-12",
                  item.color.icon,
                )}
              >
                <item.icon size={isMobile ? 19 : 24} color="white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="mb-6 text-base text-gray-600 md:text-lg dark:text-gray-300">
          Join thousands of teens who are already building their financial
          future
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button radius="large" size={"4"}>
            Start Your Journey
          </Button>
          <Button
            onClick={() => setIsVisibleDemoVideo(true)}
            radius="large"
            size={"4"}
            variant="surface"
            color="cyan"
          >
            Watch Demo
          </Button>
        </div>
      </div>
      {isVisibleDemoVideo && <DemoVideo close={setIsVisibleDemoVideo} />}
    </div>
  );
};

export default Introduction;
