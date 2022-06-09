import React, { useContext } from 'react'
import Bos from "../Components/Bos";
import { QuizContext } from '../Helpers/Contex'
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminPanel() {

    const { setGameState, studentList, setStudentList, quastions, setUser, history } = useContext(QuizContext)
    const Logout = () => {
        setUser({ no: "", password: "" });
        setGameState("login")
    }
 

    return (


        <div style={{ width: "80%", height: "80%" }} >
            <div style={{ flexDirection: "row", justifyContent: "space-around" ,backgroundColor:"#e5ecee",height:80,alignItems:"center",marginTop:2,paddingTop:15}}>
                <Button onClick={()=>{   setGameState("student")}}> Yeni Öğrenci Kaydı</Button>
                <Button onClick={()=>{   setGameState("lesson")}}> Yeni Ders Kaydı</Button>
                <Button variant='text' style={{ color: "orange" }} onClick={Logout}>çıkış</Button>
                
                {/* <Button onClick={setGameState("student")}> Öğrenci Ekle</Button> */}
            </div>

            

            {

                Object.keys(quastions).map((item) => (



                    <Bos lesson={item} studentList={studentList} setStudentList={setStudentList} />

                )
                )
            }

        </div>

    )

}

export default AdminPanel