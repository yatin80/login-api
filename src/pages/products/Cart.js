import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  
  const getCartData = async () => {
    const response = await fetch('https://fakestoreapi.com/carts');
    const data = await response.json();
    console.log("cart data", data);
    setCartData(data);
    
    // Fetch product details for each item in all carts
    const productDetailsMap = {};
    for (const cart of data) {
      for (const item of cart.products) {
        if (!productDetailsMap[item.productId]) {
          const productResponse = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
          const productData = await productResponse.json();
          productDetailsMap[item.productId] = productData;
        }
      }
    }
    setProductDetails(productDetailsMap);
  };
  
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-2 mt-3'>
        <h2 className=''>Cart</h2>
        <div className='fw-bold'>{cartData.length} items</div>
      </div>
      <div className='cart-main-box'>
      {cartData.map((cart, cartIndex) => (
        <div key={cartIndex} className='mb-4'>
          <h4>Cart #{cart.id} (User: {cart.userId})</h4>
          <div className='row'>
            {cart.products.map((item, itemIndex) => {
              const product = productDetails[item.productId];
              return product ? (
                <div key={itemIndex} className='col-md-6 mb-3'>
                  <div className='card h-100'>
                    <div className='row g-0'>
                      <div className='col-md-4'>
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className='img-fluid rounded-start' 
                          style={{ height: '150px', objectFit: 'contain', padding: '1rem' }}
                        />
                      </div>
                      <div className='col-md-8'>
                        <div className='card-body'>
                          <h5 className='card-title text-truncate'>{product.title}</h5>
                          <p className='card-text'>
                            <span className='text-primary fw-bold'>${product.price}</span>
                            <span className='ms-2 text-muted'>x {item.quantity}</span>
                          </p>
                          <p className='card-text'>
                            <small className='text-muted'>Category: {product.category}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
    </Container>
  )
}
