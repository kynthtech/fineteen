import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

function FollowUs() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Follow Us
      </h2>
      <div className="mb-8 text-center">
        <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
          Stay connected with FinTeen on social media for the latest updates,
          financial tips, and educational content designed specifically for
          teens.
        </p>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://facebook.com/finteen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 transform items-center justify-center rounded-xl bg-blue-600 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-blue-700 hover:shadow-xl"
        >
          <MdFacebook size={24} color="white" />
        </a>
        <a
          href="https://twitter.com/finteen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 transform items-center justify-center rounded-xl bg-black shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:hover:bg-gray-200"
        >
          <FaXTwitter size={24} className="text-white dark:text-black" />
        </a>
        <a
          href="https://instagram.com/finteen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 transform items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transition-all duration-200 hover:scale-110 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl"
        >
          <FaInstagram size={24} color="white" />
        </a>
        <a
          href="https://linkedin.com/company/finteen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 transform items-center justify-center rounded-xl bg-blue-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-blue-800 hover:shadow-xl"
        >
          <FaLinkedin size={24} color="white" />
        </a>
        <a
          href="https://youtube.com/finteen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 transform items-center justify-center rounded-xl bg-red-600 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-red-700 hover:shadow-xl"
        >
          <FaYoutube size={24} color="white" />
        </a>
      </div>
    </section>
  );
}

export default FollowUs;
