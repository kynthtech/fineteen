import { IoMdEye } from "react-icons/io";
import { StudentStates } from "../context";
import type { TStudentData } from "@types_/student";
import { useContext } from "react";
import Span from "@components/interfaces/Span";
import { MdEdit } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router";
import Pagination from "@components/interfaces/Pagination";
import { Avatar, Badge, Table, Tooltip, IconButton } from "@radix-ui/themes";
import ItemsNotFound from "@components/others/ItemsNotFound";

function StudentsList() {
  const navigate = useNavigate();
  const { data, setIsAddModalOpen } = useContext(StudentStates);
  const [pageParam, setPageParam] = useSearchParams({ page: "1" });

  const handleOpenEdit = (data: TStudentData) => {
    setIsAddModalOpen({ isOpen: true, editData: data });
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-1.5 pt-6">
          <h3 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
            Students
          </h3>
          <p className="text-muted-foreground text-sm">
            Showing {data.students?.length} of {data.totalStudent} students
          </p>
        </div>
        <Pagination
          length={data.totalStudent}
          setPage={setPageParam}
          page={pageParam}
        />
      </div>
      {data.students.length > 0 && (
        <div className="pt-6">
          <div className="space-y-4 overflow-x-auto text-nowrap">
            <Table.Root
              variant="surface"
              className="!border-[1px] border-gray-200 !bg-white dark:!border-gray-700 dark:!bg-gray-800"
            >
              <Table.Header>
                <Table.Row>
                  {[
                    "Student",
                    "email",
                    "phono",
                    "Admission No.",
                    "School",
                    "Gender",
                    "Section",
                    "Grade",
                    "Actions",
                  ].map((head) => (
                    <Table.ColumnHeaderCell key={head}>
                      {head}
                    </Table.ColumnHeaderCell>
                  ))}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.students?.map((student) => (
                  <Table.Row align="center">
                    <Table.RowHeaderCell>
                      <Avatar
                        variant="soft"
                        size="3"
                        radius="full"
                        fallback={student.studentName.charAt(0).toUpperCase()}
                      />
                      <span className="ml-2">{student.studentName}</span>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <Span>{student.email}</Span>
                    </Table.Cell>
                    <Table.Cell>
                      <Span>{student.mobileNumber}</Span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge size="2">{student.admissionNumber}</Badge>
                    </Table.Cell>
                    <Table.Cell>{student.school?.schoolName}</Table.Cell>
                    <Table.Cell>{student.gender}</Table.Cell>
                    <Table.Cell>{student.section}</Table.Cell>
                    <Table.Cell>{student.classStandard}</Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-2">
                        <Tooltip content="Open Profile">
                          <IconButton
                            radius="medium"
                            color="purple"
                            variant="soft"
                            onClick={() =>
                              navigate(`/admin/student/${student._id}/view`)
                            }
                          >
                            <IoMdEye size={16} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit Profile">
                          <IconButton
                            onClick={() => handleOpenEdit(student)}
                            radius="medium"
                            color="sky"
                            variant="soft"
                          >
                            <MdEdit size={16} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        </div>
      )}
      {data.students.length === 0 && (
        <ItemsNotFound
          type="student"
          title="No students found"
          className="h-full"
        />
      )}
      <div className="h-7" />
    </div>
  );
}

export default StudentsList;
