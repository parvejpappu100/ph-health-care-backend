import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.get("/", DoctorController.getAllDoctors);
router.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.DOCTOR),
  DoctorController.getDoctorById,
);
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.DOCTOR),
  DoctorController.updateDoctor,
);

router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  DoctorController.softDeleteDoctor,
);

export const DoctorRoutes = router;
