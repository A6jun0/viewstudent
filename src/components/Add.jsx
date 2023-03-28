import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var[input,setInput]=useState({
        name:'',
        grade:''
    })
    const inputHandler=(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
        
    }
    const readValues=(e)=>{
         axios.post("http://localhost:3005/students",input) 
         .then(Response=>{
            alert("success")
         })
         .catch(err=>console.log(err))
    } 
    return (
   <div><br /><br /><br /><br /><br />
    <TextField label="name" name='name' value={input.name} onChange={inputHandler}/><br /><br />
    <TextField label="grade" name='grade' value={input.grade} onChange={inputHandler}></TextField><br /><br />
    <Button variant="contained" onClick={readValues} >add</Button>
   </div>
  )
}

export default Add