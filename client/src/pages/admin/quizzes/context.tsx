import type { TQuizData } from "@types_/quiz";
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";

type TDataQuiz = {
  quizzes: TQuizData[];
  totalQuizzes: number;
  stats: {
    totalQuizzes: number;
    totalPublicQuizzes: number;
    averageScore: number;
    studentsAttempted: number;
  };
};

type TContextType = {
  data: TDataQuiz;
  setData: Dispatch<SetStateAction<TDataQuiz>>;
};

export const QuizzesStates = createContext<TContextType>({
  data: {
    quizzes: [],
    totalQuizzes: 0,
    stats: {
      totalQuizzes: 0,
      averageScore: 0,
      studentsAttempted: 0,
      totalPublicQuizzes: 0,
    },
  },
  setData: () => {},
});

function QuizzesProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TDataQuiz>({
    quizzes: [],
    totalQuizzes: 0,
    stats: {
      totalQuizzes: 0,
      averageScore: 0,
      studentsAttempted: 0,
      totalPublicQuizzes: 0,
    },
  });
  return (
    <QuizzesStates.Provider value={{ data, setData }}>
      {children}
    </QuizzesStates.Provider>
  );
}

export default QuizzesProvider;
