

export default function Timer(props:any){


  const timingProps = props.timingProps;

  const timerStartStop = ()=>{
      timingProps.setTimerStatus(!timingProps.timerStatus);
    }



  const timerReset = ()=>{
    timingProps.settiming(0);
  }


  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4'>
        <div className='text-2xl'>{Math.floor(timingProps.timing/60/60)}:{Math.floor(timingProps.timing/60)}:{(timingProps.timing%60)}</div>
        <button onClick={()=> timerStartStop()}>Start/Stop</button>
        <button onClick={()=> timerReset()}>reset</button>
        
    </div>
  )
}
