import z from "zod";

export const updateDoctorValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    profilePhoto: z.url("Invalid URL format").optional(),
    contactNumber: z.string().optional(),
    registrationNumber: z.string().optional(),
    experience: z
      .int("Experience must be a whole number")
      .min(0, "Experience cannot be negative")
      .optional(),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
    address: z
      .string()
      .min(10, "Address must be at least 10 characters")
      .max(100, "Address must be at most 100 characters")
      .optional(),
    appointmentFee: z
      .number()
      .positive("Appointment fee must be positive")
      .optional(),
    qualification: z.string().optional(),
    currentWorkingPlace: z.string().optional(),
    designation: z.string().optional(),
    specialties: z
      .array(z.uuid("Each specialty ID must be a valid UUID"))
      .optional(),
  }),
});
