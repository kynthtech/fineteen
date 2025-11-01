import { toast } from "@functions/toast/toast";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import useSchoolRegister from "@hooks/api/others/useSchoolRegister";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import { RegExpPatterns } from "@utils/regExpPatten";
import { useNavigate } from "react-router";

function Auth() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<any>();
  const { registerSchool, loading } = useSchoolRegister();
  const navigate = useNavigate();

  const submitFrom = async (params: any) => {
    toast.processing(registerSchool(params), {
      loadingText: "Registering school..",
      successText: () => {
        reset();
        navigate("/");
        return "School registered successfully";
      },
      errorText: (response) => {
        return response.data.error;
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitFrom)}>
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
          htmlFor="schoolName"
        >
          School Name: <span className="text-red-500">*</span>
        </label>
        <InputControlled
          isRequired
          name="schoolName"
          errors={errors}
          patternValidation={{
            value: RegExpPatterns.stringWithChar,
            message: "School has to be a string",
          }}
          register={register}
          placeholder="Enter school name"
          errorMessage="School name is required"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="schoolLocation"
          >
            School Location: <span className="text-red-500">*</span>
          </label>
          <InputControlled
            isRequired
            name="schoolLocation"
            errors={errors}
            register={register}
            placeholder="Enter school location"
            errorMessage="Location is required"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="boardOfEducation"
          >
            Board of Education: <span className="text-red-500">*</span>
          </label>
          <InputControlled
            isRequired
            errors={errors}
            register={register}
            patternValidation={{
              value: RegExpPatterns.string,
              message: "Board has to be a string",
            }}
            name="boardOfEducation"
            placeholder="Enter board of education"
            errorMessage="Board is required"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="contactPersonDetails"
          >
            Contact Person Details: <span className="text-red-500">*</span>
          </label>
          <InputControlled
            isRequired
            name="contactPersonDetails"
            errors={errors}
            patternValidation={{
              value: RegExpPatterns.string,
              message: "details has to be a string",
            }}
            register={register}
            placeholder="Enter contact person details"
            errorMessage="Contact person details is required"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="coordinatorName"
          >
            External Program Coordinator Name:{" "}
            <span className="text-red-500">*</span>
          </label>
          <InputControlled
            isRequired
            errors={errors}
            register={register}
            name="coordinatorName"
            patternValidation={{
              value: RegExpPatterns.string,
              message: "Name has to be a string",
            }}
            placeholder="Enter contact person details"
            errorMessage="Contact person details is required"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="coordinatorContact"
          >
            Coordinator Contact Number:
            <span className="text-red-500">*</span>
          </label>
          <InputControlled
            isRequired
            type="number"
            errors={errors}
            register={register}
            patternValidation={{
              value: RegExpPatterns.mobileNumber,
              message: "Enter valid phone number",
            }}
            name="coordinatorContact"
            placeholder="Enter Cordinator number"
            errorMessage="Cordinator number is required"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="mailId"
          >
            Mail Id: <span className="text-red-500">*</span>
          </label>
          <InputControlled
            isRequired
            name="mailId"
            errors={errors}
            register={register}
            placeholder="Enter Mail id"
            patternValidation={{
              value: RegExpPatterns.email,
              message: "Enter valid mail id",
            }}
            errorMessage="Mail is required"
          />
        </div>
      </div>
      <Button disabled={loading} variant="solid" radius="medium" size="3">
        Submit
      </Button>
    </form>
  );
}

export default Auth;
