import React ,{useContext}from 'react'
import { Quastions } from "../Helpers/QuastionBank";
import Bos from "../Components/Bos";
import { QuizContext } from '../Helpers/Contex'

function AdminPanel() {

    const {   setGameState,studentList, setStudentList ,quastions, setUser,history} = useContext(QuizContext)
    const Logout = () => {
        setUser({ name: "", password: "" });
       setGameState("login")
      }

    return (

      
        <div style={{ width: "80%", height: "80%" }} >
            <button onClick={Logout}>çıkış</button>


            {
                
                Object.keys(quastions).map((item) => (

                   

                    <Bos lesson={item} studentList={studentList} setStudentList={setStudentList}  />

                )
                )
            }
           {
             history&&  history.map((item)=> {
                   <label>{item.status}</label>
               })
           }

        </div>

    )

}

export default AdminPanel