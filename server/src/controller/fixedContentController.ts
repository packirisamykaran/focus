
import fixedSchema from "../model/fixedContentModel";
import {Request, Response} from "express";
import fixedContentModel from "../model/fixedContentModel";

export const insertUpdateContent = async(req:Request, res:Response)=>{

    try {

        const data = req.body;
        const username = data.username;
        const type = data.type;
        const content = data.content; 
    
    
     

        let query = {
            username,
            type,
        }

        let update = {
            content
        }

        let options = {upsert: true, new: true, setDefaultsOnInsert: true};
        let updated = await fixedContentModel.findOneAndUpdate(query, update, options);

      

        res.send("Success")
        
    } catch (error) {
        console.log(error);
    }
}


export const getAllFixedContent = async(req:Request, res:Response)=>{

    const data = req.body;
    const username = data.username;

    let query = {
        username
    }
    

    try {
        const contents = await fixedContentModel.find(query);
        
        let contentRes :{
            [key: string]: string
        } = {
            "goal":"",
            "habit":"",
            "todo":"",
            "thought":""
        };

        

        contents.forEach(obj => {
            if(obj.type){
                contentRes[obj.type] = obj.content 
                
            }
        });

        
        res.send(contentRes);

    } catch (error) {
        console.log(error)
    }

}