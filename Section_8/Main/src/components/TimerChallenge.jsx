import { useState,useRef } from "react";
import ResultModal from "./ResultModal";
// let timer; 

export default function TimerChallenge({title,targetTime}){
    const timer= useRef();
    const dialog= useRef();

    const [timeRemaining,setTimeRemaining]=useState(targetTime * 1000);
    const timerIsActive = timeRemaining>0 && timeRemaining < targetTime *1000;
    
   
   
    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handelStart(){

        timer.current= setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10);
        },10);
        setTimerStarted(true);
    }

    function handelStop(){
        dialog.current.open();
        clearInterval(timer.current)
    }

    function handelReset(){
        setTimeRemaining(targetTime*1000);
    }

    return(
    <>
    <ResultModal 
        ref={dialog} 
        targetTime={targetTime} 
        remainingTime={timeRemaining}
        onReset={handelReset}
    />
    <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p className="challenge-time">
            {targetTime} second{targetTime>1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? handelStop : handelStart }>
                {timerIsActive ? 'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive ? 'active': undefined}>
            {timerIsActive ?'Time is running' : 'Timer Inactive'}
        </p>
    </section>
    </>
);}