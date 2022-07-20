import axios from "axios";
import FixedContent from "../fixedContent/FixedContent";
import "../style/Timer.css"

export default function Timer(props:any){

  const username = 'k';
  const url = "http://localhost:5000/"



  const tp = props.timingProps;

  const timerStartStop = ()=>{

    

      if(!tp.timerStatus){
        tp.setstartTiming(Date.now());
       
      }
      else{
        tp.settotalTiming(tp.timing)
      
      }


      tp.setTimerStatus(!tp.timerStatus);



      if(tp.timerStatus){
        axios.post(url+"timer/saveTiming", {
          username,
          hour:minutes,
          minute:seconds
        });
      }
    }



  const timerReset = ()=>{
    tp.settiming(0)
    tp.settotalTiming(0);
    tp.setstartTiming(Date.now())
  }


  let hours = Math.floor(tp.timing/60/60);
  let minutes =  Math.floor(tp.timing/60);
  let seconds = (tp.timing%60);

  return (
    <div className='timer'>
        <div className='display'>{hours}:{minutes}:{seconds}</div>
        <button className="start" onClick={()=> timerStartStop()}>Start/Stop</button>
        <button className="reset" onClick={()=> timerReset()}>reset</button>
    </div>
  )
}
