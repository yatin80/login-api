import React, { useState } from 'react'

export default function Form(props) {
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

    console.log("check", formData.first, formData.last, formData.econtact);

    const onSubmitHandle = (e) => {
        e.preventDefault();
        setFormData(formData)
        console.log("get data", formData);
        props.getFormData = formData
    }
    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={onSubmitHandle}>
                <input type='text' name='first' placeholder='First name' value={formData.first} onChange={handleChange} /><br /><br />
                <input type='text' name='last' placeholder='Last name' value={formData.last} onChange={handleChange} /><br /><br />
                <input type='email' name='econtact' placeholder='Email' value={formData.econtact} onChange={handleChange} /><br /><br />
                <input type='password' name='' placeholder='Password' /><br /><br />
                <input type='text' name='' placeholder='Enter services' /><br /><br />
                <input type='submit' value={'Submit'} />
            </form>
        </div>
    )
}
