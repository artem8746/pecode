import express from 'express';
import * as authenticationController 
  from '../controllers/auth.controller';

export const router = express.Router();

router.post('/login', authenticationController.login);

router.post('/signUp', authenticationController.signUp);