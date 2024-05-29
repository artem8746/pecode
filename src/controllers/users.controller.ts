import { StatusCode } from "../enums/StatusCode";
import { normalizeUser } from "../helpers/userHelper";
import * as usersService from "../services/users.service";

export const get = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = normalizeUser(await usersService.get(userId));

    res.status(StatusCode.OK);
    res.send(user);
  } catch (ex) {
    return StatusCode.INTERNAL_SERVER_ERROR;
  }
}