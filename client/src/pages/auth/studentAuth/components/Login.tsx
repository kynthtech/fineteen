import ScrollTop from "@components/app/ScrollTop";
import InputControlled from "@components/interfaces/Controlled/InputControlled";
import { toast } from "@functions/toast/toast";
import useStudentAuth from "@hooks/api/auth/useStudent.auth";
import { Button } from "@radix-ui/themes";
import { RegExpPatterns } from "@utils/regExpPatten";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

function Login() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const { loading, loginStudent } = useStudentAuth();
  const navigate = useNavigate();

  const handleSubmitForm = (data: any) => {
    toast.processing(loginStudent(data), {
      loadingText: "Logging in...",
      successText: () => {
        navigate("/dashboard");
        return "Logged in successfully";
      },
      errorText: (error) => {
        return error.data.error || "Failed to login";
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(handleSubmitForm)}>
      <ScrollTop />
      <div className="grid grid-cols-1 gap-6">
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
      </div>
      <Button
        disabled={loading}
        size="3"
        variant="soft"
        radius="medium"
        type="submit"
        className="!w-full"
      >
        Submit
      </Button>
      <div className="mt-5">
        <Link
          to="/auth?action=register-student"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Don&apos;t have an account ?{" "}
          <span className="text-cyan-500">Register</span>
        </Link>
      </div>
    </form>
  );
}

export default Login;
