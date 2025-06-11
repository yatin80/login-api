import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from './Form'

export default function Contact() {
    const [dataFromChild, setDataFromChild] = useState('');

    function handleDataFromChild(s) {
        setDataFromChild({ data: [...dataFromChild, s] });
    }
    return (
        <Container className='mt-3'>
            <h2 className='mb-4'>Contact</h2>
            <Form sendDataToParent={handleDataFromChild} />
            {/* <Table data={dataFromChild} /> */}
        </Container>
    )
}
