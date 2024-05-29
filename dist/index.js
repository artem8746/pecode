'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const createServer_1 = require("./createServer");
(0, createServer_1.createServer)()
    .listen(process.env.PORT || 5700, () => {
    console.log(`Server is running on localhost:${process.env.PORT || 5700}`);
});
//# sourceMappingURL=index.js.map