import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
function App() {

  const [userInput,setUserInput]= useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid= userInput.duration >=1;

function handelChange(inputIdentifier,newValue){
    setUserInput(prevUserInput => {
        return{...prevUserInput,[inputIdentifier]:+newValue}});
}



  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handelChange}/>
    {!inputIsValid && <p className="center">Please Enter a Duration Greater Than Zero</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
