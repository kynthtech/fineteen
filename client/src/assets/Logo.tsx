import clsx from "clsx";
import { Link } from "react-router";

function Logo({ from }: { from?: string }) {
  return (
    <div className={clsx(from == "home" ? "block" : "hidden sm:block")}>
      <Link to="/">
        <span className="text-2xl font-semibold text-gray-700 transition-all duration-300 dark:text-white">
          Finte<span className="text-cyan-500">e</span>
          <span className="text-green-400">n</span>
        </span>
      </Link>
    </div>
  );
}

export default Logo;
