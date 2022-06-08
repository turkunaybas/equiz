import './App.css';
import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import Admin from './Components/AdminPanel';
import Bos from './Components/Bos.js';

import { QuizContext } from "./Helpers/Contex";

function App() {
  const [gameState, setGameState] = useState("login");
  const [score, setScore] = useState(0);
  const [ogrNo, setOgrNo] = useState("");
  const [user, setUser] = useState({ name: "", password: "" });
  const [selected, setSelected] = useState({});
  const [exam, setExam] = useState({ name: "", part: "" });
  const [history,setHistory]=useState([""]);

  const [studentList, setStudentList] = useState([
    {
      personel: {
        name: "Can Yücel",
        password: "2",
        no: 3
      },
      exams: {
        Matematik: { vize: 0, final: 0, status: false },
        Fizik: { vize: 0, final: 0, status: false }
      }
    },
    {
      personel: {
        name: "admin",
        password: "123",
        no: 12
      },
      exams: {


      }
    },
    {
      personel: {
        name: "Ali Yılmaz",
        password: "2",
        no: 4
      },
      exams: {
        Matematik: { vize: 0, final: 0, status: false },
        Fizik: { vize: 0, final: 0, status: false },
       

      }
    },
    {
      personel: {
        name: "Ayşe Demir",
        password: "2",
        no: 5
      },
      exams: {
        Matematik: { vize: 0, final: 0, status: false },
        Fizik: { vize: 0, final: 0, status: false }
      }
    },
    {
      personel: {
        name: "Can Yüksel",
        password: "1212",
        no: 6
      },
      exams: {
        Matematik: { vize: 0, final: 0, status: false ,vizeHistory:[],finalHistory:[]},
        Fizik: { vize: 0, final: 0, status: false },
        Biyoloji: { vize: 0, final: 0, status: false }
      }
    },

  ])
  const [quastions, setQuastions] = useState(
    {
      Matematik: {

        vize: [
          {
            prompt: "vize?",
            optionA: "24",
            optionB: "21",
            optionC: "4",
            optionD: "2",
            answer: "C",
          },
          {
            prompt: "What is 5+5?",
            optionA: "11",
            optionB: "12",
            optionC: "1",
            optionD: "10",
            answer: "D",
          },
          {
            prompt: "What is 6+3?",
            optionA: "24",
            optionB: "9",
            optionC: "8",
            optionD: "13",
            answer: "B",
          },
        ],
        final: [
          {
            prompt: "final?",
            optionA: "24",
            optionB: "21",
            optionC: "4",
            optionD: "2",
            answer: "C",
          },
          {
            prompt: "What is 5+5?",
            optionA: "11",
            optionB: "12",
            optionC: "1",
            optionD: "10",
            answer: "D",
          },
          {
            prompt: "What is 6+3?",
            optionA: "24",
            optionB: "9",
            optionC: "8",
            optionD: "13",
            answer: "B",
          },
        ]


      },

      Fizik: {

        vize: [
          {
            prompt: "vize?",
            optionA: "24",
            optionB: "21",
            optionC: "4",
            optionD: "2",
            answer: "C",
          },
          {
            prompt: "What is 5+5?",
            optionA: "11",
            optionB: "12",
            optionC: "1",
            optionD: "10",
            answer: "D",
          },
          {
            prompt: "What is 6+3?",
            optionA: "24",
            optionB: "9",
            optionC: "8",
            optionD: "13",
            answer: "B",
          },
        ],
        final: [
          {
            prompt: "final?",
            optionA: "24",
            optionB: "21",
            optionC: "4",
            optionD: "2",
            answer: "C",
          },
          {
            prompt: "What is 5+5?",
            optionA: "11",
            optionB: "12",
            optionC: "1",
            optionD: "10",
            answer: "D",
          },
          {
            prompt: "What is 6+3?",
            optionA: "24",
            optionB: "9",
            optionC: "8",
            optionD: "13",
            answer: "B",
          },
        ]


      },
      Biyoloji: {

        vize: [
          {
            prompt: "vize?",
            optionA: "24",
            optionB: "21",
            optionC: "4",
            optionD: "2",
            answer: "C",
          },
          {
            prompt: "What is 5+5?",
            optionA: "11",
            optionB: "12",
            optionC: "1",
            optionD: "10",
            answer: "D",
          },
          {
            prompt: "What is 6+3?",
            optionA: "24",
            optionB: "9",
            optionC: "8",
            optionD: "13",
            answer: "B",
          },
        ],
        final: [
          {
            prompt: "final?",
            optionA: "24",
            optionB: "21",
            optionC: "4",
            optionD: "2",
            answer: "C",
          },
          {
            prompt: "What is 5+5?",
            optionA: "11",
            optionB: "12",
            optionC: "1",
            optionD: "10",
            answer: "D",
          },
          {
            prompt: "What is 6+3?",
            optionA: "24",
            optionB: "9",
            optionC: "8",
            optionD: "13",
            answer: "B",
          },
        ]


      },

    }
  )

  return (
    <div className="App">
      <h1>Quiz App </h1>
      <QuizContext.Provider value={{
        gameState, setGameState, score, setScore, ogrNo, setOgrNo, user,
        setUser, selected, setSelected, setExam, exam, studentList, setStudentList,
        quastions, setQuastions,history,setHistory
      }} >
        {gameState === "login" && <Login />}
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "admin" && <Admin />}
        {gameState === "bos" && <Bos />}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
