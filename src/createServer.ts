'use strict';

const express = require('express');

export function createExpressServer() {
  const app = express();

  return app;
}