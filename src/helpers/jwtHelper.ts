import jwt from 'jsonwebtoken';

export const sign = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

export const verify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}