import { MAdmin } from "../models/admin.model";
import { AdminCredentials } from "./data";

// This method will create default admin credentials
export const defaultAdminCredentials = async () => {
  const adminExist = await MAdmin.findOne({ username: "finteen" });

  if (adminExist) {
    return;
  }

  await MAdmin.create(AdminCredentials);
};
