'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./routes/auth.route");
const posts_route_1 = require("./routes/posts.route");
const users_route_1 = require("./routes/users.route");
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./middlewares/auth");
function createServer() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: "*"
    }));
    app.use('/auth', auth_route_1.router);
    app.use('/posts', auth_1.authMiddleware, posts_route_1.router);
    app.use('/users', auth_1.authMiddleware, users_route_1.router);
    return app;
}
exports.createServer = createServer;
//# sourceMappingURL=createServer.js.map