import { BsExclamationCircle } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

function InfoWeCollect() {
  return (
    <div className="sm:mb-12">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        <IoEyeOutline size={32} className="text-cyan-500 dark:text-cyan-400" />
        Information We Collect
      </h2>
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Personal Information
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-400">
            <li>• Full name and email address</li>
            <li>• Age and grade level</li>
            <li>• School affiliation (if applicable)</li>
            <li>• Parent/guardian contact information</li>
            <li>• Profile preferences and settings</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Usage Information
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-400">
            <li>• Course progress and completion data</li>
            <li>• Quiz scores and assessment results</li>
            <li>• Time spent on platform activities</li>
            <li>• Device and browser information</li>
            <li>• IP address and location data</li>
          </ul>
        </div>
      </div>
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-700/50 dark:bg-yellow-900/20">
        <div className="flex items-start gap-3">
          <BsExclamationCircle
            size={20}
            className="mt-0.5 flex-shrink-0 text-yellow-600 dark:text-yellow-400"
          />
          <div>
            <h4 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
              Special Note for Minors
            </h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              For users under 18, we require parental consent before collecting
              any personal information. We comply with COPPA (Children's Online
              Privacy Protection Act) and similar international regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoWeCollect;
