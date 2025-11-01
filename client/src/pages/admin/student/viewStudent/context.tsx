import type { TStudentViewData } from "@types_/student";
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";

type TContextType = {
  data: TStudentViewData;
  setData: Dispatch<SetStateAction<TStudentViewData>>;
};

export const StudentViewStates = createContext<TContextType>(
  {} as TContextType,
);

function StudentViewProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TStudentViewData>({} as TStudentViewData);
  return (
    <StudentViewStates.Provider value={{ data, setData }}>
      {children}
    </StudentViewStates.Provider>
  );
}

export default StudentViewProvider;
