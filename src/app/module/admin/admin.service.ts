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

export const AdminService = {
  getAllAdmins,
};
