import React, { useState } from 'react';
import api from '../utils/api';

function Login(props) {
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
            .post("/api/login", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.payload)
                props.history.push('/home')               
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <hr/>
            <input 
                type='text' 
                name='username' 
                placeholder='User Name' 
                onChange={handleChange}
                value={data.username}
                />

            <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                onChange={handleChange}
                value={data.password}
                />

            <button 
                type='submit'>Submit
            </button>
        </form>
    )
}

export default Login;