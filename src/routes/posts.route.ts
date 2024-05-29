import express from 'express';
import * as postsController from '../controllers/posts.controller';

export const router = express.Router();

router.get('/', postsController.getAll);

router.post('/', postsController.create);