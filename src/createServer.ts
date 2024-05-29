'use strict';

import express from 'express';
import { router as authRouter } from './routes/auth.route';
import { router as postsRouter } from './routes/posts.route';
import { router as usersRouter } from './routes/users.route';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/auth';

export function createServer() {
  const app = express();

  app.use(cookieParser());
  app.use(express.json());

  app.use(cors({
    origin: "*"
  }));

  app.use('/auth', authRouter);

  app.use('/posts', authMiddleware, postsRouter);

  app.use('/users', authMiddleware, usersRouter);

  return app;
}