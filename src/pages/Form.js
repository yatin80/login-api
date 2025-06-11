import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export default function Form({ sendDataToParent }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const [formData, setFormData] = useState({
        first: '',
        last: '',
        econtact: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })


    }

    // console.log("check", formData.first, formData.last, formData.econtact);

    const onSubmitHandle = (e) => {
        e.preventDefault();
        setFormData(formData)
        sendDataToParent(formData)
    }
    return (
        <div>
            {/* <h2 className='mb-4'>Contact</h2> */}
            <form onSubmit={onSubmitHandle}>
                <div className='mb-3'>
                    <input type='text' name='first' placeholder='First name' value={formData.first} onChange={handleChange} className='input-field' />
                </div>
                <div className='mb-3'>
                    <input type='text' name='last' placeholder='Last name' value={formData.last} onChange={handleChange} className='input-field' />
                </div>
                <div className='mb-3'>
                    <input type='email' name='econtact' placeholder='Email' value={formData.econtact} onChange={handleChange} className='input-field' />
                </div>
                <div className='mb-3'>
                    <input type='password' name='' placeholder='Password' className='input-field' />
                </div>
                <div className='mb-3'>
                    <input type='text' name='' placeholder='Enter services' className='input-field' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
