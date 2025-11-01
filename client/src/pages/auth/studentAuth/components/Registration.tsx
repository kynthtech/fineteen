import ScrollTop from "@components/app/ScrollTop";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import { toast } from "@functions/toast/toast";
import useStudentAuth from "@hooks/api/auth/useStudent.auth";
import { Button } from "@radix-ui/themes";
import { RegExpPatterns } from "@utils/regExpPatten";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

const Registration = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const { loading, registerStudent, requestOtp } = useStudentAuth();
  const [isOtpSend, setIsOtpSend] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForm = (data: any) => {
    if (isOtpSend) {
      toast.processing(registerStudent(data), {
        loadingText: "OTP verification...",
        successText: () => {
          navigate("/auth?action=login-student");
          return "Student registered successfully";
        },
        errorText: (error) => {
          return error.data.error || "Failed to register student";
        },
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const postData = {
      mobileNumber: data.mobileNumber,
      admissionNumber: data.admissionNumber,
    };

    toast.processing(requestOtp(postData), {
      loadingText: "OTP sending...",
      successText: () => {
        setIsOtpSend(true);
        return "OTP sent successfully";
      },
      errorText: (error) => {
        return error.data.error || "Failed to send OTP";
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(handleSubmitForm)}>
      <ScrollTop />
      {!isOtpSend ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 md:col-span-1">
            <label
              className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
              htmlFor="studentName"
            >
              Student Name <span className="text-red-400">*</span>
            </label>
            <InputControlled
              isRequired
              name="studentName"
              errors={errors}
              patternValidation={{
                value: RegExpPatterns.string,
                message: "studentName has to be a string",
              }}
              register={register}
              placeholder="Enter student name"
              errorMessage="Student name is required"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-1">
            <label
              className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
              htmlFor="admissionNumber"
            >
              Admission Number <span className="text-red-400">*</span>
            </label>
            <InputControlled
              isRequired
              name="admissionNumber"
              errors={errors}
              register={register}
              placeholder="Enter admission number"
              errorMessage="Admission number is required"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
              htmlFor="mobileNumber"
            >
              Mobile Number <span className="text-red-400">*</span>
            </label>
            <InputControlled
              isRequired
              name="mobileNumber"
              errors={errors}
              patternValidation={{
                value: RegExpPatterns.mobileNumber,
                message: "Mobile number is not valid",
              }}
              register={register}
              placeholder="Enter mobile number"
              errorMessage="Mobile number is required"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
              htmlFor="email"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <InputControlled
              isRequired
              name="email"
              errors={errors}
              patternValidation={{
                value: RegExpPatterns.email,
                message: "Email is not valid",
              }}
              register={register}
              placeholder="Enter email"
              errorMessage="Email is required"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
              htmlFor="email"
            >
              Password <span className="text-red-400">*</span>
            </label>
            <InputControlled
              isRequired
              name="password"
              errors={errors}
              patternValidation={{
                value: RegExpPatterns.password,
                message:
                  "Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters",
              }}
              register={register}
              placeholder="Enter password"
              errorMessage="Password is required"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
              htmlFor="email"
            >
              Confirm Password <span className="text-red-400">*</span>
            </label>
            <InputControlled
              isRequired
              name="confirmPassword"
              errors={errors}
              patternValidation={{
                value: RegExpPatterns.password,
                message:
                  "Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters",
              }}
              register={register}
              placeholder="Enter confirm password"
              errorMessage="confirm Password is required"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 md:col-span-1">
          <label
            className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
            htmlFor="otp"
          >
            Otp <span className="text-red-400">*</span>
          </label>
          <InputControlled
            isRequired
            name="otp"
            errors={errors}
            patternValidation={{
              value: /^\d{4}$/,
              message: "OTP must be 4 digits",
            }}
            register={register}
            placeholder="Enter OTP"
            errorMessage="Otp is required"
          />
        </div>
      )}
      <Button
        disabled={loading}
        size="3"
        variant="soft"
        radius="medium"
        type="submit"
        className="!w-full"
      >
        Next
      </Button>
      <div className="mt-5">
        <Link
          to="/auth?action=login-student"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Already have an account ? <span className="text-cyan-500">Login</span>
        </Link>
      </div>
    </form>
  );
};

export default Registration;
