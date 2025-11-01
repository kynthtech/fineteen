import { Router } from "express";
import AuthController from "./auth.controller";

const router = Router();

router.post("/admin-login", AuthController.adminLogin);
router.post("/admin/me", AuthController.adminMe);

router.post("/request-otp", AuthController.requestOtp);
router.post("/student-register",AuthController.studentRegister);
router.post("/student-login",AuthController.studentLogin);
router.post("/student/me", AuthController.studentMe);
router.put("/student", AuthController.updateStudent);
router.put("/student/password",AuthController.updatePassword);
// router.post("/student-verify", AuthController.studentVerify);

// router.post("/school-register");

export default router;
