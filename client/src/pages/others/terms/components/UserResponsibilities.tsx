import { MdSupervisedUserCircle } from "react-icons/md";

function UserResponsibilities() {
  return (
    <div className="mb-12">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        <MdSupervisedUserCircle
          size={32}
          className="text-cyan-500 dark:text-cyan-400"
        />
        User Responsibilities
      </h2>
      <div className="space-y-6">
        <div className="rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6 shadow-2xs dark:border-green-700/50 dark:from-green-900/20 dark:to-emerald-900/20">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Account Security
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            You are responsible for maintaining the security of your account and
            password. You must notify us immediately of any unauthorized use of
            your account.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Keep your login credentials confidential</li>
            <li>• Use a strong, unique password</li>
            <li>• Enable two-factor authentication when available</li>
            <li>• Report suspicious account activity immediately</li>
            <li>• Log out from shared or public devices</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-2xs dark:border-blue-700/50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Acceptable Use
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            You agree to use our platform only for lawful purposes and in
            accordance with these Terms. Prohibited activities include but are
            not limited to:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Sharing inappropriate or offensive content</li>
            <li>• Attempting to hack or compromise platform security</li>
            <li>• Impersonating other users or entities</li>
            <li>• Distributing malware or harmful code</li>
            <li>• Violating intellectual property rights</li>
            <li>• Engaging in harassment or bullying</li>
          </ul>
        </div>
        <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6 shadow-2xs dark:border-purple-700/50 dark:from-purple-900/20 dark:to-pink-900/20">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Age Requirements
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            Our platform is designed for teenagers aged 13-18. Special
            requirements apply for different age groups:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h5 className="mb-2 font-medium text-gray-900 dark:text-white">
                Ages 13-15
              </h5>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-400">
                <li>• Parental consent required</li>
                <li>• Limited data collection</li>
                <li>• Enhanced privacy protections</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-2 font-medium text-gray-900 dark:text-white">
                Ages 16-18
              </h5>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-400">
                <li>• Independent account creation</li>
                <li>• Full platform access</li>
                <li>• Optional parental oversight</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserResponsibilities;
