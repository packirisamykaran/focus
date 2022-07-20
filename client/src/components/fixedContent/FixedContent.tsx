import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { URL, username } from '../context';
import "../style/FixedContent.css"

export default function FixedContent(props:any) {
    const type = props.type;

    const [content, setcontent] = useState<string>()

    


    

    // retrieve content

    useEffect(()=>{
      setcontent(props.content[type])
    }, [props.content, type])

    
    // onchange Function
    const onChange=()=>{
        const doc = document.getElementById(type) as HTMLInputElement;
        setcontent(doc?.value);

    }
    // onchange Function



    // On submit functino
    const onSubmit = async()=>{

        try {
         await axios.post(URL+"fixedContent/update", {username, type, content  });

       
        } catch (error) {
          console.log(error)
        }
    }
    // On submit functino




    // Heading and placeholder
    let heading;
    let placeholder;

    if(type==="goal"){
      heading="Current Goals";
      placeholder = "3 short term goals"
    }
    else if(type==="habit"){
      heading = "Habits"
      placeholder = "Habits to build"
    }
    else if(type==="todo"){
      heading = "Todo-List"
      placeholder = "Plan your day"
    }
    else if(type==="thought"){
      heading = "Thoughts"
      placeholder= "what's on your mind"
    }
    // Heading and placeholder




  return (
   
        <div className='fixed-content'>
          <div>{heading}</div>
          <textarea onBlur={onSubmit}   placeholder={placeholder} onChange={onChange} id={props.type} value={content} />
        </div>


  )
}
