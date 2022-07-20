import {Request, Response} from "express";
import timerModel from "../model/timerModel";



export const saveTiming = async(req:Request, res:Response)=>{

    const data = req.body;

    const username = data.username
    const hours = data.hour;
    const minutes = data.minute;

    const date = new Date();


    try{

        let query = {
            username,
            date:{
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            }

        };
        let update = {timing:{
            hours, minutes
        }};
        let options = {upsert: true, new: true, setDefaultsOnInsert: true};
        let model = await timerModel.findOneAndUpdate(query, update, options);


    }catch(error){
        console.log(error)
    }







}