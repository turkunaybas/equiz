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
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import BorderColorIcon from '@mui/icons-material/BorderColor';




export default function MainMenu() {

  const { quastions,selected, setGameState, setExam, setUser, user, studentList } = React.useContext(QuizContext)

  const Logout = () => {
    setUser({ no: "", password: "" });
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
          <Button style={{backgroundColor:"#f07167"}} variant='contained' onClick={Logout}> ÇIKIŞ</Button>
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
                  <TableCell align="right">

                    
  
                    <Button  style={{ borderWidth:1.8}}variant="outlined" disabled={quastions[item]["vize"]===undefined ||selected.exams[item].vize !== ""} onClick={() => { setGameState("quiz"); setExam({ name: item, part: "vize" }) }}>   {selected.exams[item].vize !== "" ? selected.exams[item].vize :<BorderColorIcon />}</Button>

                  </TableCell>
                  <TableCell align="right"> <Button variant="outlined"disabled={quastions[item]["final"]===undefined || selected.exams[item].final !== ""} onClick={() => { setGameState("quiz"); setExam({ name: item, part: "final" }) }}> {selected.exams[item].final !== "" ? selected.exams[item].final :<BorderColorIcon />} </Button>
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