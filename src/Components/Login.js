import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import { QuizContext } from '../Helpers/Contex';


export default function Login() {
  const adminUser = {
    name: "admin",
    no:"1",
    password: "123"
  }

  const [error, setError] = useState("");
  const { setSelected, user, setUser ,setGameState, studentList} = useContext(QuizContext);

  const Login = details => {
    console.log(details);
    let selected;
    selected = studentList.find(item => item.personel.no === details.no && item.personel.password === details.password)
    setSelected(selected)
    if (selected) {
      setUser({
        no: details.no,
        password: details.password
      });

      if (selected.personel.no=== adminUser.no && selected.personel.password===adminUser.password){
        setGameState("admin");
      }
      
      else{ setGameState("menu")}


    } else {
      console.log("girmedi", selected)
      setError("BİLGİLER UYMADI")
    }

  }

  const Logout = () => {
    setUser({ name: "", password: "" })
  }
  return (
    <div className='Login'>
      {(user.no !== ""&&user.password!=="") ? (
        <div className='welcome'>
          <h2> Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout} >logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}
