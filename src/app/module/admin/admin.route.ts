import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { AdminController } from "./admin.controller";

const router = Router();

router.get("/", checkAuth(Role.SUPER_ADMIN), AdminController.getAllAdmins);
router.get("/:id", checkAuth(Role.SUPER_ADMIN, Role.ADMIN), AdminController.getAdminById);

export const AdminRoutes = router;
