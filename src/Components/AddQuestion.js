import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { QuizContext } from '../Helpers/Contex';

function AddQuestion({ lesson, part, setShow, setVizebitti, setFinalbitti }) {
    const { quastions, setQuastions, setGameState, setPart} = useContext(QuizContext);
    const [question, setQuastion] = useState({
        prompt: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
    });
    const [sorulist, setSoruList] = useState([])




    const AddLesson = () => {

        if(sorulist.length!==0){
            setQuastion({
                prompt: "",
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: "",
                answer: "",
            });
            setQuastions({ ...quastions, [lesson]: { [part]: sorulist } })
            console.log(quastions, "sorular");
    
            if (part === "vize") {
                setVizebitti(true)
                setShow(false)
            }
            else {
                setFinalbitti(true)
                setShow(false);
            }
    
        }
        else {
            alert("En az bir soru giriniz")
        }
       

    }

    const Save = () => {
        if(question.prompt!==""&&question.optionA!==""&&question.optionB!==""&&question.optionC!==""&&
        question.optionD!==""&&question.answer!=="")
        {setSoruList([...sorulist, question]);
        setQuastion({
            prompt: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            answer: "",
        });}
       else{
           alert("Boş Alanları Doldurunuz")
       }

        console.log(sorulist, "kayıtlarr")

    };
    //onChange={e=>setQuastion({...details,password:e.target.value})}
    return (
        <div style={{ marginTop: 50, width: 600 }}>
            <FloatingLabel controlId="quastion" label="Soru" className="mb-3" >
                <Form.Control value={question.prompt} as="textarea" placeholder="Leave a comment here" style={{ height: '100px', borderColor: "blue", borderWidth: 2 }} onChange={e => setQuastion({ ...question, prompt: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="choiceA" label="A-)" className="mb-2">
                <Form.Control
                    value={question.optionA}
                    as="textarea"
                    placeholder="Leave a comment here"
                    onChange={e => setQuastion({ ...question, optionA: e.target.value })}
                    style={{ height: '70px', borderColor: "blue", borderWidth: 1 }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="choiceB" label="B-)" className="mb-2">
                <Form.Control
                    value={question.optionB}
                    as="textarea"
                    onChange={e => setQuastion({ ...question, optionB: e.target.value })}
                    placeholder="Leave a comment here"
                    style={{ height: '70px', borderColor: "blue", borderWidth: 1 }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="choiceC" label="C-)" className="mb-2">
                <Form.Control
                    value={question.optionC}
                    as="textarea"
                    onChange={e => setQuastion({ ...question, optionC: e.target.value })}
                    placeholder="Leave a comment here"
                    style={{ height: '70px', borderColor: "blue", borderWidth: 1 }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="choiceD" label="D-)" className="mb-2">
                <Form.Control
                    value={question.optionD}
                    as="textarea"
                    onChange={e => setQuastion({ ...question, optionD: e.target.value })}
                    placeholder="Leave a comment here"
                    style={{ height: '70px', borderColor: "blue", borderWidth: 1 }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Doğru cevabı seçiniz">
                <Form.Select value={question.answer} aria-label="Floating label select example" onChange={e => setQuastion({ ...question, answer: e.target.value })}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>

                </Form.Select>
            </FloatingLabel>

            <Button style={{ marginTop: 20 }} onClick={Save} variant="contained"> Soruyu Kaydet</Button>
            <Button style={{ marginTop: 20, marginLeft: 20 }} onClick={AddLesson} variant="contained"> Sınavı tamamla</Button>
            <Button style={{ marginTop: 20, marginLeft: 20 }} onClick={()=>{setShow(false) ;setSoruList([]);setPart("")}} variant="contained"> Sınavı İptal et</Button>


        </div>
    )
}

export default AddQuestion