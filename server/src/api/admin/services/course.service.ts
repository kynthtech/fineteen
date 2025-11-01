import httpCode from "http-status-codes";
import { TFilterQuery } from "../admin.type";
import { MCourses } from "../../../models/courses.model";
import { AppError } from "../../../utils/Error/AppError";
import { TCourseData } from "../validator/course.validator";
import { deleteAllFiles } from "../../../middleware/deleteFiles.middleware";

// ✅Safely handle unknown errors with proper typing
const handleMongoError = (error: unknown, context: string) => {
  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  throw new AppError(`${errorMessage} - Error in ${context}`, httpCode.BAD_REQUEST);
};

const createCourse = async (course: TCourseData) => {
  try {
    const result = await MCourses.create(course);
    return result;
  } catch (error: unknown) {
    handleMongoError(error, "Mongodb");
  }
};

const getCourses = async (query: TFilterQuery["course"]) => {
  const page = query.page ?? 1;
  const search = query.search ?? "";
  const difficulty = query.difficulty ?? "";
  const category = query.category ?? "";

  const queryFilter = {
    $and: [
      {
        title: { $regex: search, $options: "i" },
        category: { $regex: category, $options: "i" },
        difficulty: { $regex: difficulty, $options: "i" },
      },
    ],
  };

  try {
    const result = await MCourses.find(queryFilter)
      .select("-__v -lessons")
      .skip((page - 1) * 10)
      .limit(10);

    const totalCourses = await MCourses.countDocuments(queryFilter);

    const [totalCreatedCourses, totalPublicCourses, totalEnrolledAgg] =
      await Promise.all([
        MCourses.countDocuments(),
        MCourses.countDocuments({ visibility: "public" }),
        MCourses.aggregate([
          {
            $group: {
              _id: null,
              studentEnrolled: { $sum: "$studentEnrolled" },
            },
          },
        ]),
      ]);

    // ✅ Safely extract aggregation result
    const totalEnrolled =
      totalEnrolledAgg.length > 0 ? totalEnrolledAgg[0].studentEnrolled : 0;

    const stats = {
      totalCreatedCourses,
      totalPublicCourses,
      totalEnrolled,
    };

    return {
      courses: result,
      totalCourses,
      stats,
    };
  } catch (error: unknown) {
    handleMongoError(error, "Mongodb");
  }
};

const getCourseById = async (id: string) => {
  try {
    const result = await MCourses.findById(id).select("-__v -studentEnrolled");
    if (!result) {
      throw new AppError("Course not found", httpCode.NOT_FOUND);
    }
    return result;
  } catch (error: unknown) {
    handleMongoError(error, "Mongodb");
  }
};

const updateCourse = async (course: TCourseData) => {
  try {
    if (!course._id) {
      throw new AppError("Course ID missing for update", httpCode.BAD_REQUEST);
    }

    // Safely handle optional deletedFiles property
    if (course.deletedFiles?.resources?.length) {
      await MCourses.updateOne(
        { _id: course._id },
        {
          $pull: {
            "lessons.$[].resources": {
              name: { $in: course.deletedFiles.resources },
            },
          },
        }
      );
    }

    await MCourses.updateOne(
      { _id: course._id },
      {
        $set: {
          title: course.title,
          description: course.description,
          category: course.category,
          difficulty: course.difficulty,
          duration: course.duration,
          visibility: course.visibility,
          thumbnail: course.thumbnail,
          lessons: course.lessons,
        },
      }
    );

    return { status: "success" };
  } catch (error: unknown) {
    handleMongoError(error, "Mongodb");
  }
};

const deleteCourse = async (id: string) => {
  try {
    const course = await MCourses.findById(id);
    if (course) {
      // ✅ Ensure deleteAllFiles accepts non-null course only
      await deleteAllFiles(course);
    }

    await MCourses.findByIdAndDelete(id);
    return { status: "success" };
  } catch (error: unknown) {
    handleMongoError(error, "Mongodb");
  }
};

export default {
  getCourseById,
  deleteCourse,
  updateCourse,
  createCourse,
  getCourses,
};
