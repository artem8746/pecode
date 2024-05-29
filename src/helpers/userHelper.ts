import { User } from "@prisma/client";

// returns all user data except password
export const normalizeUser = (user: User) => {
  const { password, ...rest } = user;

  return rest;
}