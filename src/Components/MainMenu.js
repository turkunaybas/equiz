// import React, { useContext, useState, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contex'
import { Quastions } from "../Helpers/QuastionBank";
import "../App.css";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function MainMenu() {

  const { selected, setGameState, setExam, setUser, user, studentList } = React.useContext(QuizContext)

  const Logout = () => {
    setUser({ name: "", password: "" });
    setGameState("login");
  }
  return (


    <div className='Menu'>
      <div  style={{ backgroundColor: "#d3d3c4" ,padding:10, borderRadius:10 }}>
        {/* <button onClick={() => {
          setGameState("quiz");
          window.localStorage.setItem('Students', JSON.stringify(Quastions))
        }}>BAŞLA </button> */}
        <div className='maintable'>
          <button onClick={Logout}> ÇIKIŞ</button>
          <h1> {selected.personel.name}</h1>
        </div>


        <TableContainer style={{ backgroundColor: "#a4b9c4" }} component={Paper}>
          <Table sx={{ minWidth: 650, height: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dersler</TableCell>
                <TableCell align="right">Vize</TableCell>
                <TableCell align="right">Final</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(selected.exams).map((item) => (

                <TableRow
                  key={item}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item}
                  </TableCell>
                  <TableCell align="right">{selected.exams[item].vize !== 0 ? selected.exams[item].vize : ""} <button disabled={selected.exams[item].vize !== 0} onClick={() => { setGameState("quiz"); setExam({ name: item, part: "vize" }) }}> Vize</button>

                  </TableCell>
                  <TableCell align="right">{selected.exams[item].final !== 0 ? selected.exams[item].final : ""} <button disabled={selected.exams[item].final !== 0} onClick={() => { setGameState("quiz"); setExam({ name: item, part: "final" }) }}> Final</button>
                  </TableCell>

                </TableRow>
              )
              )
              }
            </TableBody>
          </Table>
        </TableContainer>






      </div>


    </div>




  )
}