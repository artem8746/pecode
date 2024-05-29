import { StatusCode } from "../enums/StatusCode";
import { verify } from "../helpers/jwtHelper";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendStatus(StatusCode.UNAUTHORIZED);
  }

  try {
    verify(token);
  } catch (ex) {
    return res.sendStatus(StatusCode.UNAUTHORIZED);
  }

  next();
};