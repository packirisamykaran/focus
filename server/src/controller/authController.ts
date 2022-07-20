
import {Request, Response} from "express"
import authModel from "../model/authModel"

type loginType = {
    username:String,
    password:String
}

export const checkLogin =async (req:Request, res:Response) => {
    
    // Retrive credientials
    const data:loginType = req.body 

    let status = {
        username:false,
        password:false
    }


    if(data){
        const username = data.username;
        const password = data.password;

    
         // check username in auth database
        try {

            const usernameExists = await authModel.exists({username});
            if(usernameExists){
                status.username = true;
                
                const passwordExists = await authModel.exists({username, password })
                if(passwordExists){
                    status.password = true;
                }
            }
           

        } catch (error) {
            
            console.log(error)
        }

    }
    console.log(status)

    res.send(status)
    
}