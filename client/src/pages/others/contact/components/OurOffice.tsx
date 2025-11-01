import { Button } from "@radix-ui/themes";
import { MdLocationPin } from "react-icons/md";

function OurOffice() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Visit Our Office
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-card rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 p-8 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-cyan-900/20">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500 dark:bg-cyan-400">
              <MdLocationPin size={24} color="white" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                FinTeen Headquarters
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visit us for in-person meetings, demos, or partnership
                discussions.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Address
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                123 Education Street
                <br />
                Learning City, LC 12345
                <br />
                United States
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Office Hours
              </h4>
              <div className="space-y-1 text-gray-700 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Getting Here
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                We're located in the heart of the education district, easily
                accessible by public transportation. Visitor parking is
                available on-site.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
            <iframe
              className="h-full w-full"
              src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
          <div className="mt-6 mb-6 text-center sm:mb-0">
            <Button variant="soft" radius="medium" size={"3"}>
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurOffice;
