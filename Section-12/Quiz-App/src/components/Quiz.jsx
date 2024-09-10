import { useState,useCallback, useRef } from "react"
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import quizCompleteImg from "../assets/quiz-complete.png"
export default function Quiz(){
   
    const [userAnswers,setUserAnswers]=useState([]);


    const activeQuestionIndex = userAnswers.length 
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    const handelSelectAnswer= useCallback(
        function handelSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return[...prevUserAnswers,selectedAnswer]
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

    
    

    return(
        <div id="quiz">
           <Question
           key={activeQuestionIndex}
           questionIndex={activeQuestionIndex}
           onSelectAnswer={handelSelectAnswer}
           onSkipAnswer={handelSkipAnswer}
           />
        </div>
    )
}