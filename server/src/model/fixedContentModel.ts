import mongoose from "mongoose";




const fixedContentSchema= new mongoose.Schema({
    username: String,
    type:String,
    content:mongoose.Schema.Types.Mixed})


export default mongoose.model("fixedContent", fixedContentSchema);




