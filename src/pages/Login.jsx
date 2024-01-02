import React from 'react'
import { useParams } from 'react-router-dom'

export default function Login() {
  const {id} = useParams()
  return (
    <div className='container'>
      <h1>Login {id}</h1>
    </div>
  )
}
