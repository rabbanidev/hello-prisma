import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      authory: true,
      category: true,
    },
  });
  return result;
};

const getAllPosts = async (options: any) => {
  return await prisma.$transaction(async (tx) => {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const skip = Number(limit) * Number(page) - Number(limit) || 0;
    const take = Number(limit) || 2;

    const result = await tx.post.findMany({
      include: {
        authory: true,
        category: true,
      },
      // Sorting
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },
      // Filtering
      where: {
        OR: [
          {
            title: { contains: searchTerm, mode: "insensitive" },
          },
          {
            category: {
              name: { contains: searchTerm, mode: "insensitive" },
            },
          },
        ],
      },
      // Pagination
      skip,
      take,
    });

    const total = await tx.post.count();

    return {
      meta: {
        page: Number(page) || 1,
        limit: take,
        total,
      },
      data: result,
    };
  });
};

const getSinglePost = async (id: number): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      authory: true,
      category: true,
    },
  });
  return result;
};

const updatePost = async (id: number, data: Partial<Post>): Promise<Post> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: data,
    include: {
      authory: true,
      category: true,
    },
  });
  return result;
};

const deletePost = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

const learnAggregate = async () => {
  const result = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
    },
  });
  // const result = await prisma.post.aggregate({
  //   _avg: {
  //     categoryId: true,
  //   },
  // });
  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggregate,
};
