import { useContext } from "react";
import { StudentViewStates } from "../context";
import { BiTrophy } from "react-icons/bi";
import { Badge } from "@radix-ui/themes";

function Achievements() {
  const {
    data: { achievements },
  } = useContext(StudentViewStates);

  if (!achievements) {
    return null;
  }

  const colors = (index: number) => {
    switch (index) {
      case 0:
        return "indigo";
      case 1:
        return "yellow";
      case 2:
        return "green";
      case 3:
        return "blue";
      default:
        return "cyan";
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <BiTrophy size={24} />
          Badges &amp; Achievements
        </h3>
      </div>
      <div className="p-4 pt-0 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {achievements.map(({ achievement }, index) => (
            <Badge size={"3"} key={index} color={colors(index)}>
              {achievement.icon} {achievement.title}
            </Badge>
          ))}
          {achievements.length == 0 && (
            <Badge size={"3"} color={"gray"}>
              No Achievements
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
