import { useState,useRef } from "react";
import ResultModal from "./ResultModal";
// let timer; 

export default function TimerChallenge({title,targetTime}){
    const timer= useRef();
    const dialog= useRef();

    const [timerStarted,setTimerStarted]=useState(false);
    const [timerExpired,setTimerExpired]= useState(false);

    function handelStart(){

        timer.current= setTimeout(()=>{
            setTimerExpired(true)
            dialog.current.open();
        },
        targetTime * 1000);
        setTimerStarted(true);
    }

    function handelStop(){
        clearTimeout(timer.current)
    }

    return(
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p className="challenge-time">
            {targetTime} second{targetTime>1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handelStop : handelStart }>
                {timerStarted ? 'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active': undefined}>
            {timerStarted ?'Time is running' : 'Timer Inactive'}
        </p>
    </section>
    </>
);}