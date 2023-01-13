import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Form() {
  const[name,setname2]=useState('')
  const navi=useNavigate()
  const changename=(e)=>{setname2(e.target.value)}
 function clk(e){
  e.preventDefault()
  axios.post("http://localhost:8000",{
    name:name
    }).then(()=>navi('/table'))
  }
 
  return (
    <div><br/><br/>
    <h1>FORM</h1>
<form>
  <input type='text' onChange={changename} value={name}></input><br/><br/>
  <button onClick={clk}>submit</button>
  </form>      
    </div>
  )
}

export default Form
