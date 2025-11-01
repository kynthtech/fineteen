import { useForm } from "react-hook-form";
import { StudentStates } from "../context";
import type { TStudentData } from "@types_/student";
import { useRevalidator } from "react-router";
import { toast } from "@functions/toast/toast";
import Modal from "@components/interfaces/Modal";
import { Button, ScrollArea } from "@radix-ui/themes";
import { useContext, useEffect, useState } from "react";
import { MdClose, MdLocationPin } from "react-icons/md";
import useStudentApi from "@hooks/api/admin/useStudent.api";
import { getSchoolsService } from "@services/admin.service";
import {
  classStandardDataSelect,
  sectionDataSelect,
} from "@utils/classStandardData";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import SelectControlled from "@components/interfaces/Controlled/SelectControlled";
import DatePickerControlled from "@components/interfaces/Controlled/DatePickerControlled";

type TOption = {
  value: string;
  label: string;
};

function StudentAdd() {
  const { setIsAddModalOpen, isAddModalOpen } = useContext(StudentStates);
  const { createStudent, loading, updateStudent } = useStudentApi();
  const [optionSchools, setOptionSchools] = useState<TOption[]>([]);
  const { revalidate } = useRevalidator();
  const isEdit = isAddModalOpen.editData.admissionNumber;

  const {
    control,
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    if (isEdit) {
      reset(isAddModalOpen.editData);
      setValue("school", isAddModalOpen.editData.school?._id);
    }
  }, []);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const submitFrom = async (params: any) => {
    const apiCall = isEdit ? updateStudent : createStudent;

    toast.processing(apiCall(params), {
      loadingText: "Adding student..",
      successText: () => {
        revalidate();
        setIsAddModalOpen({ isOpen: false, editData: {} as TStudentData });
        return "Student added successfully";
      },
      errorText: (response) => response.data.error,
    });
  };

  const getSchoolsOptions = async (value: boolean) => {
    if (value && optionSchools.length === 0) {
      const result = await getSchoolsService(undefined, "plain");
      if (result.schools.length === 0) {
        return setOptionSchools([{ value: "-1", label: "Schools not found" }]);
      }
      const options = result.schools.map((item: any) => ({
        value: item._id,
        label: item.schoolName,
      }));
      setOptionSchools(options);
    }
  };

  return (
    <Modal open={true} className="!max-w-[45pc]" size="1">
      <ScrollArea type="hover" scrollbars="vertical">
        <form
          className="space-y-3 p-2 sm:space-y-6 sm:p-5"
          onSubmit={handleSubmit(submitFrom)}
        >
          <div className="mb-4 flex justify-between sm:mb-6">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {isEdit ? "Edit" : "Add"} Student
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Please fill in the form below to {isEdit ? "edit" : "add a new"}{" "}
                student
              </p>
            </div>
            <MdClose
              onClick={() =>
                setIsAddModalOpen(({ isOpen }) => ({
                  isOpen: !isOpen,
                  editData: {} as TStudentData,
                }))
              }
              className="cursor-pointer"
              size={20}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="school"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                School <span className="text-red-500">*</span>
              </label>
              <SelectControlled
                isRequired
                name="school"
                errors={errors}
                control={control}
                options={optionSchools}
                placeholder="Select School"
                onOpenChange={getSchoolsOptions}
                errorMessage="School is required"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="admissionNumber"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Admission Number <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                errors={errors}
                register={register}
                name="admissionNumber"
                placeholder="Enter Admission Number"
                errorMessage="Admission Number is required"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="studentName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Student Name <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                name="studentName"
                errors={errors}
                register={register}
                errorMessage="Student name is required"
                placeholder="Enter full name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <DatePickerControlled
                name="dateOfBirth"
                control={control}
                errors={errors}
                isRequired={true}
                errorMessage="Date of birth is required"
                placeholder="Select date of birth"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="gender"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <SelectControlled
                isRequired
                control={control}
                name="gender"
                errors={errors}
                options={genderOptions}
                placeholder="Select gender"
                errorMessage="Gender is required"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="class"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Class <span className="text-red-500">*</span>
              </label>
              <SelectControlled
                isRequired
                name="classStandard"
                errors={errors}
                control={control}
                options={classStandardDataSelect}
                placeholder="Select Class"
                errorMessage="Class is required"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="section"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Section <span className="text-red-500">*</span>
              </label>
              <SelectControlled
                isRequired
                name="section"
                errors={errors}
                control={control}
                options={sectionDataSelect}
                errorMessage="Section is required"
                placeholder="Select section"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="parentName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Parent/Guardian Name <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                name="parentName"
                errors={errors}
                register={register}
                errorMessage="Parent/Guardian name is required"
                placeholder="Enter full name"
              />
            </div>
          </div>

          <div className="pt-4">
            <h4 className="flex items-center gap-2 text-base font-medium text-gray-800 dark:text-gray-200">
              <MdLocationPin size={20} className="text-cyan-500" /> Address
              Information
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="state"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                State <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                name="address.state"
                errors={errors}
                register={register}
                errorMessage="State is required"
                placeholder="Select state"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                City <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                name="address.city"
                errors={errors}
                register={register}
                errorMessage="City is required"
                placeholder="Enter city name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="street"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Street Address <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                name="address.street"
                errors={errors}
                register={register}
                errorMessage="Street address is required"
                placeholder="Enter street address"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="pinCode"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Pincode <span className="text-red-500">*</span>
              </label>
              <InputControlled
                isRequired
                name="address.pinCode"
                errors={errors}
                register={register}
                errorMessage="Pincode is required"
                placeholder="Enter 6-digit pincode"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              onClick={() =>
                setIsAddModalOpen({
                  isOpen: false,
                  editData: {} as TStudentData,
                })
              }
              variant="soft"
              size="3"
              radius="medium"
              color="gray"
              disabled={loading}
            >
              Close
            </Button>
            <Button
              type="submit"
              disabled={loading}
              variant="solid"
              size="3"
              radius="medium"
            >
              {isEdit ? "Update" : "Add"} Student
            </Button>
          </div>
        </form>
      </ScrollArea>
    </Modal>
  );
}

export default StudentAdd;
