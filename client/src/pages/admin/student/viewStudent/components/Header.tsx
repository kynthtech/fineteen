import { useContext } from "react";
import { StudentViewStates } from "../context";
import { Avatar, Badge, Button } from "@radix-ui/themes";
import { Link } from "react-router";
import { MdArrowLeft } from "react-icons/md";

function Header() {
  const { data } = useContext(StudentViewStates);

  if (!data.personalInfo) {
    return null;
  }

  const avatarName =
    data.personalInfo.studentName.split(" ")[0].charAt(0) +
    data.personalInfo.studentName.split(" ")[1].charAt(0);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Link to="/admin/students?page=1" className="pl-3 sm:pl-0">
        <Button variant="ghost" radius="medium" size="3">
          <MdArrowLeft />
          Back to Students
        </Button>
      </Link>
      <div className="flex items-center gap-4">
        <Avatar fallback={avatarName} size={"5"} />
        <div>
          <div className="mb-1 flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              {data.personalInfo.studentName}
            </h1>
            <Badge
              size={"3"}
              color={data.personalInfo.isRegistered ? "green" : "red"}
            >
              {data.personalInfo.isRegistered ? "Registered" : "Not Registered"}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Admission No: {data.personalInfo.admissionNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
