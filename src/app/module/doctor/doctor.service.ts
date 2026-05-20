import { prisma } from "../../lib/prisma";

const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
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

const getDoctorById = async (id: string) => {
  const doctor = await prisma.doctor.findUnique({
    where: {
      id,
      isDeleted: false,
    },
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
  return doctor;
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
};
