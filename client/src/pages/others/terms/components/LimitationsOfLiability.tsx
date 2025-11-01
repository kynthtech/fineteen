import { BsExclamationCircle } from "react-icons/bs";
import { MdOutlineShield } from "react-icons/md";

function LimitationsOfLiability() {
  return (
    <div className="mb-12">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        <MdOutlineShield
          size={32}
          className="text-cyan-500 dark:text-cyan-400"
        />
        Limitations of Liability
      </h2>
      <div className="space-y-6">
        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-700/50 dark:bg-yellow-900/20">
          <div className="flex items-start gap-3">
            <BsExclamationCircle
              size={20}
              className="mt-0.5 flex-shrink-0 text-yellow-600 dark:text-yellow-400"
            />
            <div>
              <h4 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
                Educational Purpose Only
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                FinTeen provides educational content for informational purposes
                only. Our content should not be considered as professional
                financial advice. Always consult with qualified financial
                advisors for specific financial decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Service Availability
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            While we strive to maintain continuous service availability, we
            cannot guarantee uninterrupted access to our platform. We are not
            liable for:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Temporary service outages or maintenance downtime</li>
            <li>• Technical issues beyond our reasonable control</li>
            <li>• Internet connectivity problems</li>
            <li>• Third-party service interruptions</li>
            <li>• Force majeure events</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Limitation of Damages
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            To the maximum extent permitted by law, FinTeen shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Loss of profits or revenue</li>
            <li>• Loss of data or information</li>
            <li>• Business interruption</li>
            <li>• Loss of educational opportunities</li>
            <li>• Emotional distress or other intangible losses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LimitationsOfLiability;
