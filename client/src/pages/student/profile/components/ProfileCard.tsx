import { StudentMeStates } from "@pages/student/context";
import { Badge } from "@radix-ui/themes";
import { useContext } from "react";
import { BiPhone } from "react-icons/bi";
import boy from "@assets/svg/boy.svg";
import girl from "@assets/svg/girl.svg";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function ProfileCard() {
  const { student } = useContext(StudentMeStates);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="p-0">
        <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 text-white sm:p-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-full border-4 border-white/20 shadow-lg sm:size-16">
              <img
                className="aspect-square h-full w-full"
                alt="Profile"
                src={student.gender == "male" ? boy : girl}
              />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold text-white sm:text-2xl">
                {student.studentName}
              </h2>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-sm font-medium">Admission No:</span>
                <span className="text-sm font-medium">
                  {student.admissionNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 sm:size-10 dark:bg-blue-900/20">
                  <FaSchool className="size-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    School
                  </p>
                  <p className="font-semibold break-words text-gray-900 dark:text-white">
                    {student?.school?.schoolName}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 sm:size-10 dark:bg-purple-900/20">
                  <FaGraduationCap className="size-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Class & Section
                  </p>
                  <div className="flex items-center gap-2 capitalize">
                    <Badge variant="surface" color="purple">
                      {student.classStandard}
                    </Badge>
                    <Badge color="indigo" variant="surface">
                      Section {student.section}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 sm:size-10 dark:bg-emerald-900/20">
                  <MdMail className="size-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email Address
                  </p>
                  <p className="font-medium break-all text-gray-900 dark:text-white">
                    {student.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 sm:size-10 dark:bg-orange-900/20">
                  <BiPhone className="size-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Mobile Number
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {student.mobileNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Active Student
              </span>
            </div>
            <Badge variant="surface" color="green">
              Verified
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
