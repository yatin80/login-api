import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'

export default function AuthLayout() {
  const location = useLocation();
  console.log("location", location.pathname);

  const leftImage = () => {
    
     return  location.pathname === "/sign-in" ? (
        <img src='https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='w-100' />
      ) : (
        <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt='' className='w-100 img-fluid' />

      )
   
  }
useEffect(()=>{
  leftImage()
},[location.pathname])
  return (
    <Container fluid className='h-100'>
      <Row className='h-100'>
        <Col className='p-0 overflow-hidden h-100'>
          {leftImage()}

        </Col>
        <Col>
          <div className='p-5 d-flex flex-column justify-content-center h-100 align-items-center'>

            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
