import { StatusCode } from "../enums/StatusCode";
import { verify } from "../helpers/jwtHelper";

export const authMiddleware = (req, res, next) => {
  const authorization = req.headers['authorization'] || '';
  const [, token] = authorization.split(' ');

  if (!token) {
    return res.sendStatus(StatusCode.UNAUTHORIZED);
  }

  try {
    const user = verify(token);

    req.user = user;
  } catch (ex) {
    return res.sendStatus(StatusCode.UNAUTHORIZED);
  }

  next();
};