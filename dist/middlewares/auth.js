"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const StatusCode_1 = require("../enums/StatusCode");
const jwtHelper_1 = require("../helpers/jwtHelper");
// checks if the user is authenticated
// if not, it will return 401 status code
// otherwise, it will call the next middleware 
// and put the user object in the request object
const authMiddleware = (req, res, next) => {
    const authorization = req.headers['authorization'] || '';
    const [, token] = authorization.split(' ');
    if (!token) {
        return res.sendStatus(StatusCode_1.StatusCode.UNAUTHORIZED);
    }
    try {
        const user = (0, jwtHelper_1.verify)(token);
        req.user = user;
    }
    catch (ex) {
        return res.sendStatus(StatusCode_1.StatusCode.UNAUTHORIZED);
    }
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map