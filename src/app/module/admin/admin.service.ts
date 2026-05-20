import status from "http-status";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { IUpdateAdminPayload } from "./admin.interface";

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

const updateAdmin = async (id: string, payload: IUpdateAdminPayload) => {
  //TODO: Validate who is updating the admin user. Only super admin can update admin user and only super admin can update super admin user but admin user cannot update super admin user

  const isAdminExist = await prisma.admin.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!isAdminExist) {
    throw new AppError(status.NOT_FOUND, "Admin Or Super Admin not found");
  }

  const { admin } = payload;

  const updatedAdmin = await prisma.admin.update({
    where: {
      id,
    },
    data: {
      ...admin,
    },
  });

  return updatedAdmin;
};

export const AdminService = {
  getAllAdmins,
  getAdminById,
  updateAdmin,
};
