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
exports.checkLogin = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const checkLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrive credientials
    const data = req.body;
    let status = {
        username: false,
        password: false
    };
    if (data) {
        const username = data.username;
        const password = data.password;
        // check username in auth database
        try {
            const usernameExists = yield authModel_1.default.exists({ username });
            if (usernameExists) {
                status.username = true;
                const passwordExists = yield authModel_1.default.exists({ username, password });
                if (passwordExists) {
                    status.password = true;
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    res.send(status);
});
exports.checkLogin = checkLogin;
