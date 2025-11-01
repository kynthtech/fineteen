import { Button } from "@radix-ui/themes";
import { BiHome } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import notFound from "@assets/Not Found.svg";

export default function NotFound() {
  const router = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 from-gray-800 via-gray-900 to-gray-900 p-4 dark:bg-gradient-to-br">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <img src={notFound} alt="not found" className="mx-auto w-96" />
        <div className="space-y-4">
          <h1 className="text-foreground text-4xl font-bold text-gray-700 md:text-5xl dark:text-white">
            Oops! Page Not Found
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-500">
            The page you're looking for seems to have wandered off into the
            digital wilderness. Don't worry though – let's get you back on track
            to your financial learning journey!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => router(-1)}
            variant="soft"
            size={"3"}
            radius="medium"
            className="group hover:bg-muted/50 transition-all duration-300"
          >
            <BsArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Go Back
          </Button>
          <Button
            asChild
            size={"3"}
            radius="medium"
            className="bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-lg transition-all duration-300 hover:from-cyan-700 hover:to-emerald-700 hover:shadow-xl"
          >
            <Link to="/">
              <BiHome className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Need help? Contact our support team or visit our{" "}
            <Link
              to="/contact"
              className="text-cyan-600 underline underline-offset-4 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              help center
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
