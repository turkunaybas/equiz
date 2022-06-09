import React, { useState, useContext } from 'react';
// import { Quastions } from "../Helpers/QuastionBank";
import { QuizContext } from '../Helpers/Contex'

function Quiz() {
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { setScore, score, setGameState ,exam,selected , setStudentList, quastions,setQuastions,setHistory,history} = useContext(QuizContext);
 

  const nextQuestion = () => {
    if (quastions[exam.name][exam.part][currQuestion].answer == optionChosen) {
      setScore(score + 1);
      setHistory([...history,{sira:currQuestion,status:true}])
    
    }
    else{
      setHistory([...history,{sira:currQuestion,status:false}])
    }
    setCurrentQuestion(currQuestion + 1);
    setOptionChosen("")
  }

  const finishQuiz = () => {
    if (quastions[exam.name][exam.part][currQuestion].answer == optionChosen) {
      setScore(score + 1);
      setHistory([...history,{sira:currQuestion,status:true}])
      // setScore(0)
      // setGameState("menu");
    }
    else{
      setHistory([...history,{sira:currQuestion,status:false}])

    }
    
    setGameState("endScreen");
  }
  // console.log('questions',JSON.parse(window.localStorage.getItem('Students')))

  return (
    <div className='Quiz'>
      <h1> {quastions[exam.name][exam.part]?.[currQuestion].prompt} </h1>
      <div className="options">

        <button className={`button ${optionChosen.includes("A") && "button-selected"}`} onClick={() => optionChosen.includes("A") ? setOptionChosen("") : setOptionChosen("A")}> {quastions[exam.name][exam.part][currQuestion].optionA}</button>
        <button className={`button ${optionChosen.includes("B") && "button-selected"}`} onClick={() => optionChosen.includes("B") ? setOptionChosen("") : setOptionChosen("B")}> {quastions[exam.name][exam.part][currQuestion].optionB}</button>
        <button className={`button ${optionChosen.includes("C") && "button-selected"}`} onClick={() => optionChosen.includes("C") ? setOptionChosen("") : setOptionChosen("C")}> {quastions[exam.name][exam.part][currQuestion].optionC}</button>
        <button className={`button ${optionChosen.includes("D") && "button-selected"}`} onClick={() => optionChosen.includes("D") ? setOptionChosen("") : setOptionChosen("D")}> {quastions[exam.name][exam.part][currQuestion].optionD}</button>


      </div>
      {currQuestion == quastions[exam.name][exam.part].length - 1 ? (
        <button className='button' onClick={finishQuiz}>Sınavı Bitir</button>
      ) : (
        <button className="button" onClick={nextQuestion}>Sıradaki Soru</button>

      )}
    </div>
  )
}
export default Quiz;
