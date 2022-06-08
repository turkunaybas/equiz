import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import { QuizContext } from '../Helpers/Contex';


export default function Login() {
  const adminUser = {
    name: "admin",
    password: "123"
  }

  const [error, setError] = useState("");
  const { setSelected, user, setUser ,setGameState, studentList} = useContext(QuizContext);

  const Login = details => {
    console.log(details);
    let selected;
    selected = studentList.find(item => item.personel.name === details.name && item.personel.password === details.password)
    setSelected(selected)
    if (selected) {
      setUser({
        name: details.name,
        password: details.password
      });

      if (selected.personel.name=== adminUser.name && selected.personel.password===adminUser.password){
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
      {(user.name != "") ? (
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
