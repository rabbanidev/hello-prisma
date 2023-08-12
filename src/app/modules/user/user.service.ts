import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

const getUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

export const UserService = {
  createUser,
  getUsers,
};
