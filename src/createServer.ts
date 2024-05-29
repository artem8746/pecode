'use strict';

import express from 'express';
import { router as authRouter } from './routes/authentication.route';

export function createServer() {
  const app = express();

  app.use('/auth', express.json(), authRouter);

  return app;
}