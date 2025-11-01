import InputControlled from "@components/interfaces/Controlled/InputControlled";
import { toast } from "@functions/toast/toast";
import useAdminAuth from "@hooks/api/auth/useAdmin.auth";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
};

function Auth() {
  const { loading, adminLogin } = useAdminAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const submitFrom = async (params: FormData) => {
    toast.processing(adminLogin(params), {
      loadingText: "Logging in..",
      successText: "Admin logged in successfully",
      errorText: (e) => {
        alert(e.data.error);
        return e.data.error;
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitFrom)}>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300">
          User Name: <span className="text-red-500">*</span>
        </label>
        <InputControlled
          isRequired
          name="username"
          errors={errors}
          register={register}
          errorMessage="User name is required"
          placeholder="Enter user name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300">
          Password: <span className="text-red-500">*</span>
        </label>
        <InputControlled
          isRequired
          name="password"
          errors={errors}
          type="password"
          register={register}
          errorMessage="password is required"
          placeholder="Enter password"
        />
      </div>
      <Button
        className="!w-full"
        variant="solid"
        radius="medium"
        size="3"
        disabled={loading}
      >
        Submit
      </Button>
    </form>
  );
}

export default Auth;
