import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../types/LoginRequest";
import { SignUpRequest } from "../types/SignUpRequest";
import bcrypt from 'bcrypt';
import { sign } from "../helpers/jwtHelper";
import { normalizeUser } from "../helpers/userHelper";

enum Errors {
  UserAlreadyExists = 'User already exists',
  InvalidCredentials = 'Invalid credentials',
  ServerError = 'Server error',
}

const saltRounds = 10;

const prisma = new PrismaClient();

export const login = async (loginRequest: LoginRequest) => {
  const user = await prisma.user.findFirst({
    where: {
      email: loginRequest.email,
    },
  });

  if (!user) {
    throw new Error(Errors.InvalidCredentials);
  }

  const isPasswordValid = bcrypt.compare(loginRequest.password, user.password);

  if (!isPasswordValid) {
    throw new Error(Errors.InvalidCredentials);
  }

  const normalizedUser = normalizeUser(user);

  return sign(normalizedUser);
};

export const signUp = async (signUpRequest: SignUpRequest) => {
  const doesUserExist = await prisma.user.findFirst({
    where: {
      email: signUpRequest.email,
    },
  });

  if (doesUserExist) {
    throw new Error(Errors.UserAlreadyExists);
  }

  const hashedPassword = bcrypt.hash(signUpRequest.password, saltRounds, (err, hash) => {
    return hash;
  });

  const user = await prisma.user.create({
    data: {
      email: signUpRequest.email,
      password: hashedPassword,
    },
  });

  const normalizedUser = normalizeUser(user);

  return sign(normalizedUser);
};
