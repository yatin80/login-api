import React, { useContext } from 'react'
import { MyContext } from '../context'
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function About() {
  const location = useLocation();
  const state = location.state

 
  console.log("check title", location);

  const {text, setText, handleClick} = useContext(MyContext)
  return (
    <Container className='my-3'>
      <h1>About</h1>
      <h2>{text}</h2>
      <button onClick={handleClick}>Click</button>
    </Container>
  )
}
