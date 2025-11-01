import clsx from "clsx";
import { useContext } from "react";
import { IoMdEye } from "react-icons/io";
import { ParticipantStates } from "../context";
import { formatTime } from "@utils/format/formatTime";
import { Link, useSearchParams } from "react-router";
import Pagination from "@components/interfaces/Pagination";
import { Badge, IconButton, Table, Tooltip } from "@radix-ui/themes";
import ItemsNotFound from "@components/others/ItemsNotFound";

function ParticipantTable() {
  const { data } = useContext(ParticipantStates);
  const [pageParam, setPageParam] = useSearchParams({ page: "1" });

  if (!data.participants) {
    return;
  }

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-row items-center justify-between space-y-1.5 pt-3 sm:pt-6">
        <div>
          <h3 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
            Participant Results ({data.participants.length})
          </h3>
          <p className="mt-1 text-sm text-green-600 sm:mt-3 dark:text-green-400">
            Pass Score: {data.quizData.passingScore}
          </p>
        </div>
        <Pagination
          length={data.totalParticipants}
          setPage={setPageParam}
          page={pageParam}
        />
      </div>
      {data.participants.length > 0 && (
        <div className="pt-6 text-nowrap">
          <Table.Root
            variant="surface"
            className="!border-[1px] border-gray-200 !bg-white dark:!border-gray-700 dark:!bg-gray-800"
          >
            <Table.Header>
              <Table.Row>
                {[
                  "Student",
                  "School & Grade",
                  "Score",
                  "Answers",
                  "Time Spent",
                  "Status",
                  "Completed At",
                  "Actions",
                ].map((head) => (
                  <Table.ColumnHeaderCell key={head}>
                    {head}
                  </Table.ColumnHeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.participants.map((participant) => (
                <Table.Row align="center">
                  <Table.Cell>
                    <div className="flex flex-col gap-1">
                      <span className="ml-2 text-base">
                        {participant.student.studentName}
                      </span>
                      <span className="ml-2 text-gray-400">
                        {participant.student.email}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-col gap-1">
                      <span className="ml-2 text-base">
                        {participant.student.school.schoolName}
                      </span>
                      <span className="ml-2 text-gray-400">
                        {participant.student.classStandard}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={clsx(
                        "text-base font-medium",
                        participant.status === "passed"
                          ? "text-green-500"
                          : "text-red-500",
                      )}
                    >
                      {Number(participant.score).toFixed(2)}%
                    </span>
                  </Table.Cell>
                  <Table.Cell valign="top">
                    {participant.result.correct}/
                    {participant.result.totalQuestions}
                  </Table.Cell>
                  <Table.Cell> {formatTime(participant.timeSpent)}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      className="capitalize"
                      size={"2"}
                      color={participant.status == "passed" ? "green" : "red"}
                    >
                      {participant.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    {" "}
                    {formatDate(participant.completedAt)}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-2">
                      <Tooltip content="Open Profile">
                        <Link
                          to={`/admin/student/${participant.student._id}/view`}
                        >
                          <IconButton
                            radius="medium"
                            color="purple"
                            variant="soft"
                          >
                            <IoMdEye size={16} />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
      )}
      {data.participants.length === 0 && (
        <div className="flex flex-1 items-center justify-center">
          <ItemsNotFound title="No participants found" type="participants" />
        </div>
      )}
      <div className="h-7" />
    </div>
  );
}

export default ParticipantTable;
