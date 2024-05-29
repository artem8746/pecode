'use strict';

import { createExpressServer } from './createServer';

createExpressServer()
  .listen(process.env.PORT || 5700, () => {
    console.log(`Server is running on localhost:${process.env.PORT || 5700}`);
  });