import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { TSchool } from "@types_/school";

type TSchoolData = {
  schools: TSchool[];
  totalSchools: number;
};

type TContextType = {
  data: TSchoolData;
  setData: Dispatch<SetStateAction<TSchoolData>>;
};

export const SchoolsStates = createContext<TContextType>({} as TContextType);

function SchoolsProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TSchoolData>({
    schools: [],
    totalSchools: 0,
  });
  return (
    <SchoolsStates.Provider value={{ data, setData }}>
      {children}
    </SchoolsStates.Provider>
  );
}

export default SchoolsProvider;
