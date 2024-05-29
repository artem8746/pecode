import express from 'express';
import * as authController
  from '../controllers/auth.controller';

export const router = express.Router();

router.post('/login', authController.login);

router.post('/signUp', authController.signUp);