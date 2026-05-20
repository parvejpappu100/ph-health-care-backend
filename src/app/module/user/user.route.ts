import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createAdminValidationSchema,
  createDoctorZodSchema,
  createSuperAdminValidationSchema,
} from "./user.validation";

const router = Router();

router.post(
  "/create-doctor",
  validateRequest(createDoctorZodSchema),
  UserController.createDoctor,
);
router.post(
  "/create-admin",
  validateRequest(createAdminValidationSchema),
  UserController.createAdmin,
);

router.post(
  "/create-super-admin",
  validateRequest(createSuperAdminValidationSchema
  ),
  UserController.createSuperAdmin,
);

export const UserRoutes = router;
