import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.route";
import { UserRoutes } from "../module/user/user.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";
import { AdminRoutes } from "../module/admin/admin.route";
import { scheduleRoutes } from "../module/schedule/schedule.route";
import { DoctorScheduleRoutes } from "../module/doctorSchedule/doctorSchedule.route";
import { AppointmentRoutes } from "../module/appoinment/appoinment.route";
import { PatientRoutes } from "../module/patient/patient.route";
import { ReviewRoutes } from "../module/review/review.route";
import { PrescriptionRoutes } from "../module/prescription/prescription.route";
import { StatsRoutes } from "../module/stats/stats.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/users", UserRoutes);
router.use("/doctors", DoctorRoutes);
router.use("/admins", AdminRoutes);
router.use("/schedules", scheduleRoutes);
router.use("/doctor-schedules", DoctorScheduleRoutes);
router.use("/appointments",AppointmentRoutes);
router.use("/patients", PatientRoutes);
router.use("/reviews", ReviewRoutes);
router.use("/prescriptions", PrescriptionRoutes);
router.use("/stats", StatsRoutes);

export const IndexRoutes = router;
