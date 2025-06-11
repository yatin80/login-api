import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authDet, setAuthDet] = useState();
    const navigate = useNavigate();

    console.log(username, password);

    // const credentials = { username: 'mor_2314', password: '83r5^_' };



    const submitHandle = (e) => {
        e.preventDefault();
        console.log("check input data", username, password);

        const credentials = {
            username: username,
            password: password
        };
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(data => {
                console.log("check auth data", data);

                if (data.token) {
                    setAuthDet(data);
                    localStorage.setItem('token', data.token);
                    navigate('/products');
                } else {
                    alert('Login failed: ' + (data.message || 'Unknown error'));
                }
            })
            .catch(error => {
                console.error("Login error:", error);
                alert("Something went wrong!");
            });
        // .then(data => {
        //     console.log("check auth data", data)
        //     setAuthDet(data);
        //     localStorage.setItem('token', data.token);
        //     navigate('/home');
        // });






    }


    console.log("check auth data", authDet);

    const signButton = {
        backgroundColor: 'var(--dark-color)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',

    }


    return (
        <>
            <h3 className='mb-4'>Sign into your account</h3>

            <form onSubmit={submitHandle} className='w-100'>
                <div className='mb-3'><input type='text' name='username' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} className='input-field' /></div>
                <div className='mb-3'><input type='password' name='password' placeholder='Enter passwored' value={password} onChange={(e) => setPassword(e.target.value)} className='input-field' /></div>
                <button type='submit' style={signButton}>Submit</button>
                <p className='text-center mt-3 pt-3'><Link to='/reset' className='text-dark text-decoration-none'>Forgot your password?</Link></p>
                <p className='text-center mt-3 fs-6'>Don't have an account? <Link to='/signup' className='text-primary'>Register here</Link></p>
            </form>
        </>
    )
}
