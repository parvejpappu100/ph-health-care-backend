import status from "http-status";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";

const getAllAdmins = async () => {
  const result = await prisma.admin.findMany({
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
          role: true,
          needPasswordChange: true,
        },
      },
    },
  });
  return result;
};

const getAdminById = async (id: string) => {
  const result = await prisma.admin.findFirst({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
          status: true,
          role: true,
          needPasswordChange: true,
        },
      },
    },
  });

  if (result?.isDeleted) {
    throw new AppError(status.FORBIDDEN, "Admin is deleted");
  }

  //   * TODO: CHECK CURRENT USER IS SUPER ADMIN OR ADMIN CAN SEE THEIR OWN DATA ONLY

  if (!result) {
    throw new AppError(status.NOT_FOUND, "Admin not found");
  }

  return result;
};

export const AdminService = {
  getAllAdmins,
  getAdminById,
};
