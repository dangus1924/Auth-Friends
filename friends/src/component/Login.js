import React, { useState } from 'react';
import api from '../utils/api';



function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
            .post("/login", data)
            .then(res => {
                localStorage.setItem("token", res.data.token)               
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='Email' onChange={handleChange} />
            <input type='password' name='password' placeholder='Password' onChange={handleChange} />

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login;