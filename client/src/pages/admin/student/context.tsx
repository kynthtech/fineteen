import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { TStudentData } from "@types_/student";

type TDataStudent = {
  students: TStudentData[];
  totalStudent: number;
};
type TContextType = {
  data: TDataStudent;
  setData: Dispatch<SetStateAction<TDataStudent>>;
  isAddModalOpen: {
    isOpen: boolean;
    editData: TStudentData;
  };
  setIsAddModalOpen: Dispatch<
    SetStateAction<{ isOpen: boolean; editData: TStudentData }>
  >;
};

export const StudentStates = createContext<TContextType>({
  data: { students: [], totalStudent: 0 },
  setData: () => {},
  isAddModalOpen: { isOpen: false, editData: {} as TStudentData },
  setIsAddModalOpen: () => {},
});

function StudentProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TDataStudent>({
    students: [],
    totalStudent: 0,
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState<{
    editData: TStudentData;
    isOpen: boolean;
  }>({
    editData: {} as TStudentData,
    isOpen: false,
  });

  return (
    <StudentStates.Provider
      value={{ data, setData, isAddModalOpen, setIsAddModalOpen }}
    >
      {children}
    </StudentStates.Provider>
  );
}

export default StudentProvider;
