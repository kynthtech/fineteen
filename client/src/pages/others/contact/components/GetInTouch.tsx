import {
  MdCall,
  MdWhatsapp,
  MdOutlineSchedule,
  MdOutlineMailOutline,
} from "react-icons/md";

function GetInTouch() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Get in Touch
      </h2>
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          className="bg-card group rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg dark:border-blue-700/50 dark:from-blue-900/20 dark:to-cyan-900/20"
          data-v0-t="card"
        >
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 transition-transform duration-200 group-hover:scale-110 dark:bg-blue-400">
              <MdOutlineMailOutline size={24} color="white" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Email Support
            </h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Get help via email
            </p>
            <a
              href="mailto:support@finteen.com"
              className="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              support@finteen.com
            </a>
          </div>
        </div>
        <div
          className="bg-card group rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg dark:border-green-700/50 dark:from-green-900/20 dark:to-emerald-900/20"
          data-v0-t="card"
        >
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 transition-transform duration-200 group-hover:scale-110 dark:bg-green-400">
              <MdWhatsapp size={24} color="white" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Whatsapp Support
            </h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Reach us directly
            </p>
            <a
              href="tel:+15551234567"
              className="text-sm font-medium text-green-600 transition-colors duration-200 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              Open Chat
            </a>
          </div>
        </div>
        <div
          className="bg-card group rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg dark:border-purple-700/50 dark:from-purple-900/20 dark:to-pink-900/20"
          data-v0-t="card"
        >
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 transition-transform duration-200 group-hover:scale-110 dark:bg-purple-400">
              <MdCall size={24} color="white" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Call Us
            </h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Call us directly
            </p>
            <button className="text-sm font-medium text-purple-600 transition-colors duration-200 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
              +1 (123) 456-7890
            </button>
          </div>
        </div>
        <div
          className="bg-card group rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg dark:border-orange-700/50 dark:from-orange-900/20 dark:to-red-900/20"
          data-v0-t="card"
        >
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 transition-transform duration-200 group-hover:scale-110 dark:bg-orange-400">
              <MdOutlineSchedule size={24} color="white" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Office Hours
            </h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Mon-Fri, 9 AM - 5 PM PST
            </p>
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
              Response within 24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
