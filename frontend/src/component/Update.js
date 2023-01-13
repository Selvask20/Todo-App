import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  axios from 'axios'

function Update() {
  const[name,setname]=useState('')
  const[up,setup]=useState("")
  const navi=useNavigate()
  const {id}=useParams()

  function changename(e){
    setup(e.target.value)
  }
 

  useEffect((id)=>{
    axios.get(`http://localhost:8000/${id}`).then((res)=>{
      setname(res.data)
      console.log(res.data);
    }

   
  )

  },[id])

  function clk(e){
    e.preventDefault()
    axios.put(`http://localhost:8000/${id}`,{
      name:up
    })
    .then(()=>navi('/table'))
  }


  return (
    <div>
     <form onSubmit={clk}>
  <input type='text' placeholder='Change Name' onChange={changename} value={up}></input><br/><br/>
  <button type='submit' >submit</button>
  </form>     
    </div>
  )
}

export default Update
