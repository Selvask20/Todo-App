import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Edittable() {
  const[count,setcount]=useState([])
  const navi=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:8000").then((res)=>{
      setcount((res.data))
    })
  },[count])
  function dele(id){
    axios.delete(`http://localhost:8000/${id}`).then(()=>show())
  }
  function show(){
    axios.get("http://localhost:8000").then((res)=>{
      setcount((res.data))
    })
  }
  function edit(id){
    navi(`/edit/${id}`)
  }
  
  return (
    <div>
      
      <table>
       <thead>  
        <th>NAME</th> 
        <th>DELETE</th> 
       <th>UPDATE</th>
     </thead>
     
       {count.map((op,index)=>(
        <tbody key={index}>
          <td>{op.name}</td>
         <td><button onClick={()=>dele(op._id)}>Delete</button></td>
         <td><button onClick={()=>edit(op._id)}>Edit</button></td> 
        </tbody>
        
       ))}
       
      </table>
    </div>
  )
}

export default Edittable
