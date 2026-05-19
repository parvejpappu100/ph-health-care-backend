import { prisma } from "../../lib/prisma";

const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
          status: true,
          needPasswordChange: true,
        },
      },
      specialties: {
        select: {
          specialty: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });
  return doctors;
};

export const DoctorService = {
  getAllDoctors,
};
