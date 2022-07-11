import React, { useEffect, useState } from 'react';
// import Login from './components/auth/Login';
import Timer from './components/timer/Timer';


function App() {
  

  // Focus time states
  const [timing, settiming] = useState<number>(0);
  const [timerStatus, setTimerStatus] = useState<boolean>(false)

  useEffect(()=>{
    let timer:any = null;

    
    if(timerStatus){
      timer = setTimeout(() => {
        const newtiming = timing+1;
        settiming(newtiming)
      }, 1000);
    }
       
        return () => clearTimeout(timer);
     
  }, [timing, timerStatus])

    // Focus time states


  
  return (
    <div className="App relative bg-violet-300 h-screen font-Rob">
      <Timer timingProps ={{timing, timerStatus, setTimerStatus, settiming }}/>
    </div>
  );
}

export default App;
