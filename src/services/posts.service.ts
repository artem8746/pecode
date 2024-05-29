import { Post, PrismaClient } from "@prisma/client";
import { PostCreateRequest } from "../types/PostCreateRequest";

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