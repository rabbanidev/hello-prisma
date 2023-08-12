import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

const getUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({
    include: {
      profile: {
        select: { id: true, bio: true },
      },
    },
  });
  return users;
};

const createOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExit = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExit) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({
    data,
  });

  return result;
};

export const UserService = {
  createUser,
  getUsers,
  createOrUpdateProfile,
};
