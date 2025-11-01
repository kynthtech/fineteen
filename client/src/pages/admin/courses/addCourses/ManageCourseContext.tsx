import React, { createContext, useState } from "react";
import {
  useForm,
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormWatch,
  type UseFormSetValue,
  type FieldErrors,
  type Control,
  type UseFormReset,
} from "react-hook-form";

type Lesson = {
  id: string;
  title: string;
  video: {
    name: string;
    duration: string;
  };
  description: string;
  resources: {
    name: string | File;
    size: string;
  }[];
};

type TFromData = {
  title: string;
  category: string;
  duration: string;
  lessons: Lesson[];
  thumbnail: File | null;
  description: string;
  deletedFiles?: {
    video?: string[];
    thumbnail?: string;
    resources?: string[];
  };
  visibility: "public" | "private";
  difficulty: "beginner" | "intermediate" | "advanced";
};

type TContext = {
  reset: UseFormReset<any>;
  control: Control<TFromData>;
  errors: FieldErrors<TFromData>;
  watch: UseFormWatch<TFromData>;
  isEditCourse: boolean | undefined;
  register: UseFormRegister<TFromData>;
  setValue: UseFormSetValue<TFromData>;
  handleSubmit: UseFormHandleSubmit<TFromData>;
  setIsEditCourse: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

export const ManageCoursesContextStates = createContext<TContext>(
  {} as TContext,
);

function ManageCourseProvider({ children }: { children: React.ReactNode }) {
  const [isEditCourse, setIsEditCourse] = useState<boolean>();
  const {
    reset,
    watch,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TFromData>({
    defaultValues: {
      lessons: [],
    },
  });

  return (
    <ManageCoursesContextStates.Provider
      value={{
        reset,
        watch,
        errors,
        control,
        register,
        setValue,
        handleSubmit,
        isEditCourse,
        setIsEditCourse,
      }}
    >
      {children}
    </ManageCoursesContextStates.Provider>
  );
}

export default ManageCourseProvider;
