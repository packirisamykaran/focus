import mongoose from "mongoose";

const authSchema= new mongoose.Schema({
    username: String,
    date:{
        day:Number,
        month:Number,
        year:Number,
    },
    timing:{
        hours:Number,
        minutes:Number
    }
})


export default mongoose.model("focustime", authSchema);