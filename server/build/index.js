"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
// import authRoute from "./routes/authRoute.js";
// import profileRoute from "./routes/profileRoute.js";
// Create express app
const app = (0, express_1.default)();
// add Cors to app
app.use((0, cors_1.default)());
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
// Port 
const PORT = process.env.PORT || 5000;
// Database connection url
const CONNECTION_URL = "mongodb+srv://root:root@cluster0.4uzbbtm.mongodb.net/focus?retryWrites=true&w=majority";
// connect to database with mongoose
mongoose_1.default.connect(CONNECTION_URL, { serverApi: mongodb_1.ServerApiVersion.v1 }).then(() => {
    app.listen(PORT, () => {
        console.log("Server Running");
    });
    // Routes
    //auth router
    // app.use("/auth", authRoute );
    // profile router
    // app.use("/profile", profileRoute)
})
    .catch((error) => {
    console.log(error);
});
