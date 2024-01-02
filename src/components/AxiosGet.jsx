import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AxiosPost from './AxiosPost';

const AxiosGet = () => {
  const [data, getData]= useState([]);

  const initialData = {name: "", phone: "", email: '', username:''}
  const [inputData, setInputData] =useState(initialData)

  const handleApiData= ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      getData(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    handleApiData();

  }, []); 
  
  const navigate= useNavigate();
  const handleClick = ()=>{
    navigate('/new-user')
  }

  

  return (
    <div className='container'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope="col">Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((items, index)=>(
          <tr key={index}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>{items.phone}</td>
            <td>{items.username}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* <button className='btn btn-primary mx-3 my-4' onClick={handleClick}> Add new user</button> */}

        <button className='btn btn-primary my-4' onClick={handleClick}> Add New User</button>
      </div>
      <AxiosPost inputData={inputData} setInputData={setInputData} getData={getData} list={data}/>
    </div>

  )
}

export default AxiosGet