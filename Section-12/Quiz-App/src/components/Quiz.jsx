import { useState,useCallback } from "react"
import Questions from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png"
export default function Quiz(){
    const [answerState,setAnswerState]=useState('')
    const [userAnswers,setUserAnswers]=useState([]);

    const activeQuestionIndex = answerState==='' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === Questions.length;


    const handelSelectAnswer= useCallback(
        function handelSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers((prevUserAnswers)=>{
            return[...prevUserAnswers,selectedAnswer]
        });
        setTimeout(()=>{
            if(selectedAnswer === Questions[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }else{
                setAnswerState('wrong');
            }
            setTimeout(()=>{
                setAnswerState('')
            },2000)
        },2000)
    },[activeQuestionIndex]);

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
                {shuffledAnswers.map((answer)=>{
                        const isSelected= userAnswers[userAnswers.length - 1] === answer;
                        let cssClass = '';

                        if(answerState === 'answered' && isSelected){
                            cssClass= 'selected'
                        }

                        if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                            cssClass= answerState;
                        }

                        return (
                            <li key={answer} className="answer">
                                <button onClick={()=>handelSelectAnswer(answer)} className={cssClass}>
                                    {answer}
                                </button>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
        </div>
    )
}