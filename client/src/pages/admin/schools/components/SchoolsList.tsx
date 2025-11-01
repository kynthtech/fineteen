import { useContext } from "react";
import { Table } from "@radix-ui/themes";
import { LuSchool } from "react-icons/lu";
import { SchoolsStates } from "../context";
import ItemsNotFound from "@components/others/ItemsNotFound";
import Pagination from "@components/interfaces/Pagination";
import { useSearchParams } from "react-router";

function SchoolsList() {
  const { data } = useContext(SchoolsStates);
  const [pageParam, setPageParam] = useSearchParams({ page: "1" });

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-row items-center justify-between sm:pt-6">
        <div className="flex flex-col space-y-1.5">
          <h3 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
            schools ({data.totalSchools})
          </h3>
          <p className="text-muted-foreground text-sm text-gray-500">
            Showing {data.schools.length} of {data.totalSchools} schools
          </p>
        </div>
        <Pagination
          length={data.totalSchools}
          setPage={setPageParam}
          page={pageParam}
        />
      </div>
      {data.schools.length > 0 && (
        <div className="pt-6">
          <div className="space-y-4 text-nowrap">
            <Table.Root
              variant="surface"
              className="!border-[1px] border-gray-200 !bg-white dark:!border-gray-700 dark:!bg-gray-800"
            >
              <Table.Header>
                <Table.Row>
                  {[
                    "School Name",
                    "Location",
                    "Board",
                    "Contact Person",
                    "Coordinator",
                    "Email",
                    "Submission Date",
                  ].map((head) => (
                    <Table.ColumnHeaderCell key={head}>
                      {head}
                    </Table.ColumnHeaderCell>
                  ))}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.schools.map((school) => (
                  <Table.Row
                    key={school._id}
                    align="center"
                    className="sm:text-base"
                  >
                    <Table.RowHeaderCell>
                      <div className="flex flex-row items-center gap-2">
                        <div className="rounded-lg bg-cyan-100 p-2 dark:bg-cyan-900">
                          <LuSchool className="text-cyan-600 dark:text-cyan-500" />
                        </div>
                        {school.schoolName}
                      </div>
                    </Table.RowHeaderCell>
                    <Table.Cell>{school.schoolLocation}</Table.Cell>
                    <Table.Cell>{school.boardOfEducation}</Table.Cell>
                    <Table.Cell>{school.contactPersonDetails}</Table.Cell>
                    <Table.Cell>
                      <div className="flex flex-col">
                        <span className="text-base">
                          {school.coordinatorName}
                        </span>
                        <span className="text-gray-400">
                          +91 {school.coordinatorContact}
                        </span>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{school.mailId}</Table.Cell>
                    <Table.Cell>
                      {new Date(school.createdAt).toDateString()}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        </div>
      )}
      {data.schools.length === 0 && (
        <ItemsNotFound
          type="schools"
          title="No schools found"
          className="h-full"
        />
      )}
      <div className="h-7" />
    </div>
  );
}

export default SchoolsList;
