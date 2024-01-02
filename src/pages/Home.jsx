import React from 'react'
import { useNavigate } from 'react-router-dom'
import ApiCalling from "../components/ApiCalling"
import NewProduct from './NewProduct';
import { Link } from 'react-router-dom';
import AxiosGet from '../components/AxiosGet'
import AxiosPost from '../components/AxiosPost';


function Home() {
    const navigate = useNavigate()
    const handleClick = () =>{
      navigate('/login/')
    }
  
  return (
    <div className='container'>
      <button className='btn btn-primary' onClick={handleClick} style={{marginLeft: 1000}}>Login</button>
      <h1 className='my-4'  style={{ marginLeft: '465px', fontFamily:  'old'}}>Welcome Home</h1>
      <AxiosGet/>

    </div>
  )
}

export default Home
