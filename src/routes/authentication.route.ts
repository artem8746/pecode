import express from 'express';
import { authenticationController }
  from '../controllers/authentication.controller';

export const router = express.Router();

router.post('/login', authenticationController.login);

router.post('/signUp', authenticationController.signUp);