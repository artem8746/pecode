import { User } from "@prisma/client";

export const normalizeUser = (user: User) => {
  const { password, ...rest } = user;

  return rest;
}