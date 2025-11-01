import { Button, IconButton } from "@radix-ui/themes";
import { FaCalculator, FaSchool } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import {
  MdCurrencyRupee,
  MdOutlineAttachMoney,
  MdOutlineCreditCard,
  MdOutlineStar,
} from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import students from "@assets//images/student.png";
import DemoVideo from "./DemoVideo";
import { useState } from "react";

function HeroSection() {
  const [isVisibleDemoVideo, setIsVisibleDemoVideo] = useState(false);

  const overview = [
    {
      head: "10K+",
      subtext: "Active Students",
    },
    {
      head: "95%",
      subtext: "Success Rate",
    },
    {
      head: "50+",
      subtext: "Partner Schools",
    },
  ];

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="relative z-10 mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700 md:px-6 md:py-3 md:text-sm dark:border-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
          <FaSchool size={19} />
          Trusted by 50+ schools nationwide
        </div>
      </div>
      <div className="relative z-10 mb-16 space-y-7 text-center sm:space-y-8">
        <h1 className="mx-auto max-w-5xl text-3xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-7xl dark:text-white">
          Empowering Teens with{/* */}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-cyan-500">
            Financial Confidence
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-normal text-gray-400 sm:text-xl lg:text-2xl dark:text-gray-400">
          Learn how to budget, save, and invest with real-life skills and fun
          lessons. Build the financial foundation you need for a successful
          future.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:pt-4">
          <Button radius="large" size="4">
            Start Learning
          </Button>
          <Button
            onClick={() => setIsVisibleDemoVideo(true)}
            radius="large"
            size="4"
            variant="surface"
          >
            How It Works
          </Button>
        </div>
      </div>
      <div className="relative mx-auto max-w-4xl">
        <div className="relative z-10 text-center">
          <div className="mx-auto w-full max-w-2xl rounded-2xl">
            <img
              alt="Teens learning about finance with digital devices and money concepts"
              loading="lazy"
              width={600}
              height={400}
              decoding="async"
              className="w-full rounded-2xl opacity-90 dark:opacity-80"
              src={students}
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-zoom absolute top-10 left-10">
            <IconButton color="green" variant="soft" size={"4"}>
              <MdCurrencyRupee size={24} color="green" />
            </IconButton>
          </div>
          <div className="animate-zoom absolute top-16 right-12">
            <IconButton color="pink" variant="soft" size={"4"}>
              <MdOutlineAttachMoney size={24} color="oklch(52.5% 0.223 3.958" />
            </IconButton>
          </div>
          <div className="animate-zoom absolute top-1/2 left-8">
            <IconButton color="cyan" variant="soft" size={"4"}>
              <IoMdTrendingUp size={24} color="oklch(52% 0.105 223.128)" />
            </IconButton>
          </div>
          <div className="animate-zoom absolute top-1/2 right-8">
            <IconButton color="blue" variant="soft" size={"4"}>
              <FaCalculator size={24} color="oklch(48.8% 0.243 264.376" />
            </IconButton>
          </div>
          <div className="animate-zoom absolute bottom-20 left-16">
            <IconButton color="purple" variant="soft" size={"4"}>
              <MdOutlineCreditCard
                size={24}
                color={"oklch(49.6% 0.265 301.924)"}
              />
            </IconButton>
          </div>
          <div className="animate-zoom absolute right-20 bottom-16">
            <IconButton color="orange" variant="soft" size={"4"}>
              <PiStudentFill size={24} color={"oklch(55.3% 0.195 38.402)"} />
            </IconButton>
          </div>
          <div className="absolute top-1/4 left-1/3 z-10 animate-ping">
            <MdOutlineStar color="#00a2c7" />
          </div>
          <div className="absolute top-2/3 right-1/3 z-10 animate-ping">
            <MdOutlineStar color="#00a2c7" />
          </div>
          <div className="absolute bottom-1/3 left-2/3 z-10 animate-ping">
            <MdOutlineStar color="#00a2c7" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 select-none sm:grid-cols-3">
        {overview.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:bg-gray-50 md:p-6 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mb-2 text-2xl font-bold text-cyan-600 md:text-3xl dark:text-cyan-400">
              {item.head}
            </div>
            <div className="font-medium text-gray-600 dark:text-gray-300">
              {item.subtext}
            </div>
          </div>
        ))}
      </div>
      {isVisibleDemoVideo && <DemoVideo close={setIsVisibleDemoVideo} />}
    </div>
  );
}

export default HeroSection;
