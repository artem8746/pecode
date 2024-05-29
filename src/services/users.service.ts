import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const get = async (userId: string) => {
  return await prisma.user.findFirst({
    where: { id: userId }
  });
}