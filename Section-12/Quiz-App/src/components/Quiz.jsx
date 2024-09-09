import { useState,useCallback } from "react"
import Questions from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png"
export default function Quiz(){
    const [userAnswers,setUserAnswers]=useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === Questions.length;


    const handelSelectAnswer=useCallback(function handelSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers,selectedAnswer];
        });
    },[]);

    const handelSkipAnswer= useCallback(()=> 
        ()=> handelSelectAnswer(null),[handelSelectAnswer]);


    if(quizIsComplete){
        return(
            <div id="summary">
                <img src={quizCompleteImg} alt="Quiz Completed Image " />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }
    const shuffledAnswers= [...Questions[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=>Math.random() - 0.5);

    return(
        <div id="quiz">
            <div id="question">
            <QuestionTimer 
            key={activeQuestionIndex}
            timeout={10000} 
            onTimeOut={handelSkipAnswer}
            />
            <h2>{Questions[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map(
                    (answer)=>(
                        <li key={answer} className="answer">
                            <button onClick={()=>handelSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    )
                )}
            </ul>
        </div>
        </div>
    )
}