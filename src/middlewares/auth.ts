import { StatusCode } from "../enums/StatusCode";
import { verify } from "../helpers/jwtHelper";

// checks if the user is authenticated
// if not, it will return 401 status code
// otherwise, it will call the next middleware 
// and put the user object in the request object

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