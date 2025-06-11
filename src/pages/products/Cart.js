import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

export default function Cart() {
    const getCartData = async () => {
        const response = await fetch('https://fakestoreapi.com/carts');
        const data = await response.json();
        console.log("cart data", data);
    }

    useEffect(()=>{
        getCartData();
    },[]) 
  return (
    <Container>
        <h2 className='my-3'>Cart</h2>
    </Container>
  )
}
