import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800/80">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500">
                  <span className="text-lg font-bold text-white">F</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  FinTeen
                </span>
              </div>
              <p className="mb-4 max-w-md text-gray-600 dark:text-gray-300">
                Empowering the next generation with financial confidence through
                interactive learning and expert guidance.
              </p>
              <p className="text-sm text-gray-500 italic dark:text-gray-400">
                "Building financially smarter teens, one lesson at a time."
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-gray-600 transition-colors duration-200 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 transition-colors duration-200 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                    to="/terms"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 transition-colors duration-200 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/finteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-500 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-500"
                >
                  <MdFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com/finteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white dark:bg-gray-700 dark:text-gray-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com/finteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-black hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black"
                >
                  <FaXTwitter size={24} className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 FinTeen. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Made with ❤️ for teens
                </span>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-gray-500 dark:text-gray-400">
                    All systems operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
