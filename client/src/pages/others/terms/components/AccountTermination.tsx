import { FaRegClock } from "react-icons/fa";

function AccountTermination() {
  return (
    <section className="mb-12">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        <FaRegClock size={32} className="text-cyan-500 dark:text-cyan-400" />
        Account Termination
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs dark:border-gray-700 dark:bg-gray-800"
          data-v0-t="card"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Termination by You
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            You may terminate your account at any time by contacting our support
            team or using the account deletion feature in your profile settings.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Download your data before deletion</li>
            <li>• Cancel any active subscriptions</li>
            <li>• Account deletion is permanent</li>
            <li>• Some data may be retained for legal compliance</li>
          </ul>
        </div>
        <div
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs dark:border-gray-700 dark:bg-gray-800"
          data-v0-t="card"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Termination by FinTeen
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-400">
            We may suspend or terminate your account if you violate these Terms
            or engage in activities that harm our platform or other users.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Warning system for minor violations</li>
            <li>• Immediate termination for serious breaches</li>
            <li>• Appeal process available</li>
            <li>• Refund policy applies to paid services</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-700/50 dark:bg-red-900/20">
        <h4 className="mb-2 font-semibold text-red-800 dark:text-red-200">
          Effect of Termination
        </h4>
        <p className="text-sm text-red-700 dark:text-red-300">
          Upon termination, your right to use the platform ceases immediately.
          Provisions regarding intellectual property, limitation of liability,
          and dispute resolution survive termination.
        </p>
      </div>
    </section>
  );
}

export default AccountTermination;
