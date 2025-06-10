import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

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
            <h3 className='mb-5'>Sign up for an account</h3>
            <form className='w-100'>
                <div className='d-flex gap-3 mb-3'>
                    <input type='text' name='firstname' placeholder='First name' value={firstname} onChange={(e) => setFirstname(e.target.value)} className='input-field' />
                    <input type='text' name='lastname' placeholder='Last name' value={lastname} onChange={(e) => setLastname(e.target.value)} className='input-field' />
                </div>
                <div className='d-flex gap-3 mb-3'>
                    <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' />
                    <input type='text' name='phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} className='input-field' />
                </div>
                <div className='mb-3'>
                    <input type='text' name='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} className='input-field' />
                </div>
                <div className='d-flex gap-3 mb-3'>

                    <input type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='input-field' />
                    <input type='password' name='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='input-field' />
                </div>
                <button type='submit' style={signButton}>Submit</button>

                <p className='text-center mt-3 pt-3'><Link to='/' className='text-dark text-decoration-none'>Back to sign up</Link></p>
                {/* <p className='text-center mt-3 fs-5'>Don't have an account? <Link to='/signup' className='text-dark text-decoration-none'>Register here</Link></p> */}
            </form>
        </>
    )
}
