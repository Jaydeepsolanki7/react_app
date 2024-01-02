import axios from 'axios'
import React, { useState } from 'react'
// import AxiosGet from './AxiosGet'

function AxiosPost({inputData, setInputData, list, getData}) {
  const handleData = (e) =>{
    setInputData({...inputData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(
      `Are you sure?? `
    )
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response)=>{
      setInputData(response.data)
      console.log(response.data)
      getData([...list, response.data])
    })
  }
  return (
    <>
    <form>
      <div className='container'>
        <label>Name : </label>
        <input className='my-2' type='text' name='name' value={inputData?.name} onChange={handleData}></input><br/>
        <label>Phone: </label>
        <input className='my-2' type='tel' name='phone' value={inputData?.phone} onChange={handleData}></input><br/>
        <label>Email : </label>
        <input className='my-2' type="text" name='email' value={inputData?.email} onChange={handleData}></input><br/>
        <label>UserName: </label>
        <input type="text" name='username' value={inputData?.username} onChange={handleData}></input><br/>
        
        <button className='btn btn-success ms-auto' onClick={handleSubmit}>Submit</button>
        
      </div>
    </form>
    </>

  )
}

export default AxiosPost
