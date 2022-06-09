import React, { useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { QuizContext } from '../Helpers/Contex';
import AddQuestion from './AddQuestion';

function AddLesson() {
    const { quastions, setQuastions,setGameState, } = useContext(QuizContext);
    const [lessonName,setLessonName]=useState("")
    const [show,setShow]=useState(false )
    const [vizebitti,setVizebitti]=useState(false )
    const [finalbitti,setFinalbitti]=useState(false )
   
    const [part,setPart]=useState("" )

    const kaydet=(partt)=>{
      if (lessonName==="")
     { alert("isim giriniz")}
      else
     { setPart(partt) ;
      setShow(true)  }
    }

    // let selected = Object.keys(quastions).find(item => item===lessonName )
  return (



    show? <div style={{ marginTop: 50, width: 600 }}>
     <AddQuestion setPart={setPart}setFinalbitti={setFinalbitti} setVizebitti={setVizebitti} lesson={lessonName} part={part} setShow={setShow} ></AddQuestion>
   </div>
   :
    <div style={{ marginTop: 50, width: 600 }}>
         <FloatingLabel controlId="quastion" label="Ders Adı" className="mb-3" >
                <Form.Control value={lessonName} as="textarea" placeholder="Leave a comment here" style={{ height: '100px', borderColor: "blue", borderWidth: 2 }}onChange={e => setLessonName(  e.target.value )} />
            </FloatingLabel>

            
            <Button disabled={vizebitti} onClick={()=>{kaydet("vize")}} > vize ekle </Button>
            <Button disabled={ finalbitti}onClick={()=>{kaydet("final")}} >final ekle</Button>
            <Button onClick={()=> setGameState("admin")} >{vizebitti===false&&finalbitti===false ? "Vazgeç":"Kaydı Bitir" }</Button> 
        </div>
  )
}

export default AddLesson;