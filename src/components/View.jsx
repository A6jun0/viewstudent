import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[student,setstudent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(Response=>{
            setstudent(student=Response.data)
            console.log(Response.data)
        })
        .catch()
    },[])
    const deleteValues=(id)=>{
        console.log("deleted clicked"+id)
        axios.delete("http://localhost:3005/students/"+id)
        .then((response)=>{
            // console.log(response.id);
            alert("sucessfully deleted");
            window.location.relode(false);
        })

    }
  return (
    <div>
        <br /><br /><br /><br />
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>grade</TableCell>  
                    <TableCell>delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {student.map((value,index)=>{
                    return<TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell><Button 
                        color='error'
                        onClick={()=>deleteValues(value.id)}
                        >delete</Button>
                            </TableCell>
                    </TableRow>
                })}
            </TableBody>

        </Table>
    </TableContainer>
    </div>    
   
  )
}

export default View