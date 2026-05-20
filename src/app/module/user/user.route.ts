import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createAdminValidationSchema,
  createDoctorZodSchema,
  createSuperAdminValidationSchema,
} from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post(
  "/create-doctor",checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createDoctorZodSchema),
  UserController.createDoctor,
);
router.post(
  "/create-admin",checkAuth(Role.SUPER_ADMIN),
  validateRequest(createAdminValidationSchema),
  UserController.createAdmin,
);

router.post(
  "/create-super-admin",
  checkAuth(Role.SUPER_ADMIN),
  validateRequest(createSuperAdminValidationSchema),
  UserController.createSuperAdmin,
);

export const UserRoutes = router;
