import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { TCourse } from "src/types/course";

type TDataCourse = {
  courses: TCourse[];
  totalCourses: number;
  stats: {
    totalEnrolled: number;
    totalCreatedCourses: number;
    totalPublicCourses: number;
  };
};

type TContextType = {
  data: TDataCourse;
  setData: Dispatch<SetStateAction<TDataCourse>>;
};

export const CoursesStates = createContext<TContextType>({
  data: {
    courses: [],
    totalCourses: 0,
    stats: {
      totalEnrolled: 0,
      totalCreatedCourses: 0,
      totalPublicCourses: 0,
    },
  },
  setData: () => {},
});

function CoursesProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TDataCourse>({
    courses: [],
    totalCourses: 0,
    stats: {
      totalEnrolled: 0,
      totalCreatedCourses: 0,
      totalPublicCourses: 0,
    },
  });
  return (
    <CoursesStates.Provider value={{ data, setData }}>
      {children}
    </CoursesStates.Provider>
  );
}

export default CoursesProvider;
