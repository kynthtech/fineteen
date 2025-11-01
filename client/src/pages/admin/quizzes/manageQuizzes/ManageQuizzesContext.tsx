import type { TQuizData } from "@types_/quiz";
import React, { createContext, useState } from "react";
import {
  useForm,
  type UseFormHandleSubmit,
  type UseFormWatch,
  type UseFormSetValue,
  type FieldErrors,
  type Control,
  type UseFormRegister,
  type UseFormReset,
} from "react-hook-form";

type TContext = {
  isPreview: boolean;
  reset: UseFormReset<any>;
  control: Control<TQuizData>;
  errors: FieldErrors<TQuizData>;
  watch: UseFormWatch<TQuizData>;
  isEditQuiz: boolean | undefined;
  register: UseFormRegister<TQuizData>;
  setValue: UseFormSetValue<TQuizData>;
  handleSubmit: UseFormHandleSubmit<TQuizData>;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditQuiz: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

export const ManageQuizzesContextStates = createContext<TContext>(
  {} as TContext,
);

function ManageQuizzesProvider({ children }: { children: React.ReactNode }) {
  const [isEditQuiz, setIsEditQuiz] = useState<boolean>();
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const {
    reset,
    watch,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TQuizData>({
    defaultValues: {
      questions: [],
      assignedGroups: [],
    },
  });

  return (
    <ManageQuizzesContextStates.Provider
      value={{
        reset,
        watch,
        errors,
        control,
        register,
        setValue,
        isPreview,
        isEditQuiz,
        handleSubmit,
        setIsPreview,
        setIsEditQuiz,
      }}
    >
      {children}
    </ManageQuizzesContextStates.Provider>
  );
}

export default ManageQuizzesProvider;
