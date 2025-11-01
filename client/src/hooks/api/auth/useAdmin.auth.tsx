import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProgress } from "@slice/others/progressLoading";
import { navigateTo } from "@servicesOther/navigationService";
import { adminLoginService, adminMeService } from "@services/auth.service";

function useAdminAuth() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const adminLogin = async (data: any) => {
    setLoading(true);
    try {
      const result = await adminLoginService(data);

      if (result.status === "success") {
        localStorage.setItem("token", result.token);
        navigateTo("/admin");
      }

      setLoading(false);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const adminMe = async () => {
    dispatch(setProgress(true));
    try {
      const result = await adminMeService();
      dispatch(setProgress(false));
      return result;
    } catch (error: any) {
      navigateTo("/admin-login");
    } finally {
      dispatch(setProgress(false));
    }
  };

  return {
    adminMe,
    adminLogin,
    loading,
  };
}

export default useAdminAuth;
