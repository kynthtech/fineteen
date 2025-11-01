import { MdDocumentScanner } from "react-icons/md";

function YourPrivacyRights() {
  return (
    <div className="sm:mb-12">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        <MdDocumentScanner
          size={32}
          className="text-cyan-500 dark:text-cyan-400"
        />
        Your Privacy Rights
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          data-v0-t="card"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Access &amp; Portability
          </h3>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            You have the right to access your personal data and receive a copy
            in a portable format.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Request a copy of your data</li>
            <li>• Download your learning progress</li>
            <li>• Export your profile information</li>
          </ul>
        </div>
        <div
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          data-v0-t="card"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Correction &amp; Deletion
          </h3>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            You can update incorrect information or request deletion of your
            personal data.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Update profile information</li>
            <li>• Correct inaccurate data</li>
            <li>• Request account deletion</li>
          </ul>
        </div>
        <div
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          data-v0-t="card"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Consent Management
          </h3>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            You can withdraw consent for data processing activities at any time.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Withdraw marketing consent</li>
            <li>• Opt out of analytics</li>
            <li>• Manage cookie preferences</li>
          </ul>
        </div>
        <div
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          data-v0-t="card"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Restriction &amp; Objection
          </h3>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            You can restrict or object to certain types of data processing.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Limit data processing</li>
            <li>• Object to profiling</li>
            <li>• Restrict automated decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YourPrivacyRights;
