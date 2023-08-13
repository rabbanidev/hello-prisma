import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllCategories = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
};
