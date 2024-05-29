import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.post.findMany();
}

export const create = async (post: Post) => {
  return await prisma.post.create({
    data: {
      ...post
    }
  });
}