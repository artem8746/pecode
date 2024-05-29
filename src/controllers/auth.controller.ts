import { SignUpRequest } from "../types/SignUpRequest";
import * as authService from "../services/auth.service";
import { StatusCode } from '../enums/StatusCode';
import { LoginRequest } from "../types/LoginRequest";

export const signUp = async (req, res) => {
  const signUpRequest: SignUpRequest = req.body;

  try {
    const token = await authService.signUp(signUpRequest);

    res.status(StatusCode.CREATED);
    res.send(token);
  } catch (ex) {
    res.status(StatusCode.BAD_REQUEST);
    res.send(ex.message);
  };
}

export const login = async (req, res) => {
  const loginRequest: LoginRequest = req.body;

  try {
    const token = await authService.login(loginRequest);

    res.status(StatusCode.OK);
    res.send(token);
  } catch (ex) {
    res.status(StatusCode.BAD_REQUEST);
    res.send(ex.message);
  };
}