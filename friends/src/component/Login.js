import React, { useState } from 'react';



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
    return (
        <form onSubmit={handleChange}>
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login;