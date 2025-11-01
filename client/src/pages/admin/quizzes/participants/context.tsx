import type { TQuizParticipants } from "@types_/quiz";
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";

type TDataParticipants = {
  stats: {
    averageScore: number;
    passingRate: number;
  };
  quizData: {
    title: string;
    passingScore: number;
    timeLimit: number;
  };
  participants: TQuizParticipants[];
  totalParticipants: number;
};

type TContextType = {
  data: TDataParticipants;
  setData: Dispatch<SetStateAction<TDataParticipants>>;
};

export const ParticipantStates = createContext<TContextType>(
  {} as TContextType,
);

function ParticipantProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TDataParticipants>({} as TDataParticipants);
  return (
    <ParticipantStates.Provider value={{ data, setData }}>
      {children}
    </ParticipantStates.Provider>
  );
}

export default ParticipantProvider;
