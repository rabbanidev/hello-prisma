import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

export const UserService = {
  getUsers,
};
