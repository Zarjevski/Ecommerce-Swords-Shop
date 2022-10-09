import React from 'react'
import { useState } from 'react'
import {Link } from "react-router-dom"
import axios from 'axios'
const Login = () => {
    const [password,setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost/login', {email, password,})
            console.log(response);
            setEmail("")
            setPassword("")    
        } catch (error) {
         console.log(error);
         setEmail('')
         setPassword('')   
        }
    }
  return (
    <div className='login center'>
        <h1>Wellcom</h1>
        <form className='login-form center' onSubmit={handleSubmit}>
            <div className='input-container'>
                <input type="email" name="email" value={email} placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='input-container'>
                <input placeholder='password' type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
        <Link to='/register' className='register-link'> don't have an account?</Link>
    </div>
  )
}

export default Login