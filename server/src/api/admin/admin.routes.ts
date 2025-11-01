import { Router } from "express";
import quizRoutes from "./routes/quiz.routes";
import studentRoues from "./routes/student.routes";
import schoolRoutes from "./routes/school.routes";
import courseRoutes from "./routes/course.routes";
import otherRoutes from "./routes/other.routes";
import notificationRoutes from "./routes/notification.routes";

const router = Router();

router.use("/students", studentRoues);
router.use("/schools", schoolRoutes);
router.use("/courses", courseRoutes);
router.use("/quizzes", quizRoutes);
router.use("/overview",otherRoutes)
router.use("/notifications", notificationRoutes);

export default router;
