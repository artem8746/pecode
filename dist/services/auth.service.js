"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.login = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwtHelper_1 = require("../helpers/jwtHelper");
const userHelper_1 = require("../helpers/userHelper");
var Errors;
(function (Errors) {
    Errors["UserAlreadyExists"] = "User already exists";
    Errors["InvalidCredentials"] = "Invalid credentials";
    Errors["ServerError"] = "Server error";
})(Errors || (Errors = {}));
const saltRounds = 10;
const prisma = new client_1.PrismaClient();
const login = (loginRequest) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findFirst({
        where: {
            email: loginRequest.email,
        },
    });
    if (!user) {
        throw new Error(Errors.InvalidCredentials);
    }
    const isPasswordValid = yield bcrypt_1.default.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new Error(Errors.InvalidCredentials);
    }
    const normalizedUser = (0, userHelper_1.normalizeUser)(user);
    return (0, jwtHelper_1.sign)(normalizedUser);
});
exports.login = login;
const signUp = (signUpRequest) => __awaiter(void 0, void 0, void 0, function* () {
    const doesUserExist = yield prisma.user.findFirst({
        where: {
            email: signUpRequest.email,
        },
    });
    if (doesUserExist) {
        throw new Error(Errors.UserAlreadyExists);
    }
    const hashedPassword = yield bcrypt_1.default.hash(signUpRequest.password, saltRounds);
    const user = yield prisma.user.create({
        data: {
            email: signUpRequest.email,
            password: hashedPassword,
        },
    });
    const normalizedUser = (0, userHelper_1.normalizeUser)(user);
    return (0, jwtHelper_1.sign)(normalizedUser);
});
exports.signUp = signUp;
//# sourceMappingURL=auth.service.js.map