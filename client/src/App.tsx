import React, { useEffect, useState } from 'react';
import Login from './components/auth/Login';
import FixedContent from './components/fixedContent/FixedContent';
import Timer from './components/timer/Timer';
import { username , URL} from './components/context';
import axios from 'axios';
import { fixedContentType } from './components/types';
import { BrowserRouter, HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import "./components/style/App.css"

function App() {
  

  // Focus time states
  const [timing, settiming] = useState<number>(0);
  const [totalTiming, settotalTiming] = useState<number>(0)
  const [timerStatus, setTimerStatus] = useState<boolean>(false)
  const [startTiming, setstartTiming] = useState<number>(0);


  useEffect(()=>{
    let timer:any = null;

    // Counter
    if(timerStatus){
      timer = setTimeout(() => {

        

        let newTiming = totalTiming + +((Date.now()-startTiming)/1000).toFixed(0);

        settiming(newTiming);
      }, 1000);
    }
       
        return () => clearTimeout(timer);
  }, [timing, timerStatus, totalTiming, startTiming])
  // Focus timer status




  // Load Fixed content
  const [fixedContent, setFixedContent]  = useState<fixedContentType>({
    goal:"",
    habit:"",
    thought:"",
    todo:""
  })

  useEffect(()=>{

    try {
      const getData =async () => {

        const contents =  await axios.post(URL+"fixedContent/getAll", {username});
         setFixedContent(contents.data)
   
       }
       getData();
   
    } catch (error) {
      console.log(error)
    }

  }, [])
  // Load Fixed content



  
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <div className='fixed-content-container'>
            <FixedContent type="goal" content = {fixedContent}  setcontent={setFixedContent}/>
            <FixedContent type="habit" content = {fixedContent} setcontent={setFixedContent}/>
          </div>
          
          <div className='navbar-outlet'>
          <div className='navbar'>
              <Link to={"/"}>
                Timer
              </Link>
              <Link to={"/goals"}>
                goals
              </Link>
              <Link to={"/journal"}>
                Journals
              </Link>
            </div>
            
            <div className="outlet">
              <Routes>
                <Route path="/" element = {<Timer timingProps ={{timing, timerStatus, setTimerStatus, settiming, setstartTiming,startTiming, settotalTiming, totalTiming }}/>} />
                <Route path="/goals" element = {<div>Long term goals</div>} />
                <Route path="/journal" element = {<div>journal</div>} />
              </Routes>
            </div>
              
          </div>
          <div className='fixed-content-container'>
            <FixedContent type="todo" content = {fixedContent} setcontent={setFixedContent}/>
            <FixedContent type="thought" content = {fixedContent} setcontent={setFixedContent}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
