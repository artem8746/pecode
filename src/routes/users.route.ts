import express from 'express';
import * as userController
  from '../controllers/users.controller';

export const router = express.Router();

router.post('/:id', userController.get);
