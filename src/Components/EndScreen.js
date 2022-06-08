import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contex';
import "../App.css";

export default function EndScreen() {
  const { score, setScore, setGameState, exam, setStudentList, selected, quastions, history, setHistory } = useContext(QuizContext);

  const restartQuiz = () => {
    setStudentList((prev) => prev.map((item) => {
      if (item.personel.no === selected.personel.no) {
        item.exams[exam.name][exam.part] = score
        if (exam.part === "vize") {
          item.exams[exam.name]["vizeHistory"] = history
        }

        else {
          item.exams[exam.name]["finalHistory"] = history
        }
      }

      return item
    }
    ))
    setScore(0);
    console.log(history, "sorular")
    setGameState("menu");

  }

  return (
    <div className='EndScreen'>
      <h1> Quiz Finished</h1>
      <h3>{score}/ {quastions[exam.name][exam.part].length}</h3>
      <button onClick={restartQuiz}> ANASAYFAYA DÖN</button>
    </div>

  )
}
