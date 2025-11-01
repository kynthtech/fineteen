import { IoMdEye } from "react-icons/io";
import { Badge } from "@radix-ui/themes";
import { CoursesStates } from "../context";
import { useContext, useState } from "react";
import { toast } from "@functions/toast/toast";
import useCourseApi from "@hooks/api/admin/useCourse.api";
import { useNavigate, useRevalidator, useSearchParams } from "react-router";
import ActionModal from "@components/interfaces/ActionModal";
import {
  MdAccessTime,
  MdDelete,
  MdEdit,
  MdPersonOutline,
} from "react-icons/md";
import DropdownMenuView from "@components/interfaces/DropdownMenu";
import Pagination from "@components/interfaces/Pagination";
import { getThumbnailUrl } from "@utils/getThumbnailUrl";
import ItemsNotFound from "@components/others/ItemsNotFound";

function CourseItems() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState({
    visible: false,
    id: "",
  });
  const { deleteCourse } = useCourseApi();
  const { data } = useContext(CoursesStates);
  const navigate = useNavigate();
  const { revalidate } = useRevalidator();
  const [pageParam, setPageParam] = useSearchParams({ page: "1" });

  const handleEditCourse = (id: string) => {
    navigate(`/admin/courses/edit/${id}`);
  };

  const difficultyColor: Record<string, "green" | "yellow" | "red"> = {
    beginner: "green",
    intermediate: "yellow",
    advanced: "red",
  };

  const handleDeleteCourse = () => {
    toast.processing(deleteCourse(openDeleteDialog.id), {
      loadingText: "Deleting course..",
      successText: () => {
        revalidate();
        setOpenDeleteDialog({ visible: false, id: "" });
        return "Course deleted successfully";
      },
      errorText: (response) => response.data.error,
    });
  };

  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.courses.map((course) => (
          <div
            key={course._id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-800">
              <img
                src={getThumbnailUrl(course.thumbnail)}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-3 flex items-start justify-between">
                <Badge
                  size={"2"}
                  className="capitalize"
                  color={course.visibility == "public" ? "green" : "red"}
                >
                  {course.visibility}
                </Badge>
                <DropdownMenuView
                  options={[
                    {
                      label: "Edit Course",
                      icon: MdEdit,
                      onClick: () => handleEditCourse(course._id),
                    },
                    {
                      color: "red" as const,
                      label: "Delete Course",
                      icon: MdDelete,
                      onClick: () =>
                        setOpenDeleteDialog({ visible: true, id: course._id }),
                    },
                  ]}
                />
              </div>
              <h3 className="mb-2 line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                {course.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                {course.description}
              </p>
              <div className="mb-4 grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <IoMdEye className="h-4 w-4" />
                  <span>{course.lessonsLength} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdPersonOutline className="h-4 w-4" />
                  <span>{course.studentEnrolled} enrolled</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="capitalize" variant="soft" size={"2"}>
                  {course.category}
                </Badge>
                <Badge
                  className="capitalize"
                  color={difficultyColor[course.difficulty]}
                  variant="soft"
                  size={"2"}
                >
                  {course.difficulty}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.courses.length == 0 && (
        <ItemsNotFound
          type="course-admin"
          title="No Courses Found"
          className="h-full"
          buttonText="Create a Course"
          buttonLink="/admin/courses/create"
        />
      )}
      <div className="mb-4">
        <Pagination
          length={data.totalCourses}
          setPage={setPageParam}
          page={pageParam}
        />
      </div>
      {openDeleteDialog.visible && (
        <ActionModal
          description="Are you sure you want to delete this course?"
          no={() => setOpenDeleteDialog({ visible: false, id: "" })}
          yes={handleDeleteCourse}
          title="Delete Course"
          yesColor="red"
          yesText="Delete"
        />
      )}
    </div>
  );
}

export default CourseItems;
