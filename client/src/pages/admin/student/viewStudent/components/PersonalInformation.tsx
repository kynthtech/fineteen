import { useContext } from "react";
import { StudentViewStates } from "../context";
import {
  MdCall,
  MdMail,
  MdMale,
  MdPerson,
  MdSchool,
  MdCalendarMonth,
  MdLocationPin,
} from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function PersonalInformation() {
  const { data } = useContext(StudentViewStates);

  if (!data.personalInfo) {
    return null;
  }
  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <MdPerson color="gray" size={24} />
            Personal Information
          </h3>
        </div>
        <div className="p-4 pt-0 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <div className="mt-1 flex items-center gap-2">
                <MdMail color="gray" size={20} />
                <p className="text-sm font-medium">
                  {data.personalInfo.email || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Phone
              </label>
              <div className="mt-1 flex items-center gap-2">
                <MdCall size={20} color="gray" />
                <p className="text-sm font-medium">
                  +91 {data.personalInfo.mobileNumber || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Grade
              </label>
              <div className="mt-1 flex items-center gap-2">
                <MdSchool size={20} color="gray" />
                <p className="text-sm font-medium capitalize">
                  {data.personalInfo.classStandard}
                </p>
                |
                <p className="text-sm font-medium capitalize">
                  Section {data.personalInfo.section}
                </p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Gender
              </label>
              <div className="mt-1 flex items-center gap-2">
                {data.personalInfo.gender == "male" ? (
                  <MdMale size={20} color="gray" />
                ) : (
                  <MdMale size={20} color="gray" />
                )}
                <p className="text-sm font-medium capitalize">
                  {data.personalInfo.gender}
                </p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                School
              </label>
              <div className="mt-1 flex items-center gap-2">
                <FaSchool size={20} color="gray" />
                <p className="mt-1 text-sm font-medium">
                  {data.personalInfo.school.schoolName}
                </p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Date of Birth
              </label>
              <div className="mt-1 flex items-center gap-2">
                <MdCalendarMonth size={20} color="gray" />
                <p className="text-sm font-medium">
                  {new Date(data.personalInfo.dateOfBirth).toDateString()}
                </p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Join Date
              </label>
              <p className="mt-1 text-sm font-medium">
                {new Date(data.personalInfo.createdAt).toDateString()}
              </p>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Address
              </label>
              <div className="mt-1 flex items-start gap-2">
                <MdLocationPin size={20} color="gray" />
                <p className="text-sm font-medium">
                  {data.personalInfo.address.city},{" "}
                  {data.personalInfo.address.state},{" "}
                  {data.personalInfo.address.street},{" "}
                  {data.personalInfo.address.pinCode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight">
            Parent/Guardian Information
          </h3>
        </div>
        <div className="p-4 pt-0 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Parent Name
              </label>
              <p className="mt-1 text-sm font-medium">
                {data.personalInfo.parentName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
