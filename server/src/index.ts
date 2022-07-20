import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import {MongoClient, ServerApiVersion} from "mongodb"
import mongoose from "mongoose";
import authRoute from "./routes/authRoute";
import timerRoute from "./routes/timerRoute";
import fixedContentRoute from "./routes/fixedContentRoute";


// Create express app
const app = express();

// add Cors to app
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Port 
const PORT = process.env.PORT || 5000; 


// Database connection url
const CONNECTION_URL = "mongodb+srv://root:root@cluster0.4uzbbtm.mongodb.net/focus?retryWrites=true&w=majority"

// connect to database with mongoose
mongoose.connect(CONNECTION_URL, { serverApi: ServerApiVersion.v1}).then(
    ()=>{
        app.listen(PORT, ()=>{
            console.log("Server Running")
        })
    
        // Routes
        //auth router
        app.use("/auth", authRoute );
        app.use("/timer", timerRoute);
        app.use("/fixedContent", fixedContentRoute);


        

    }
)
.catch(
    (error)=>{
    console.log(error)}
)
    