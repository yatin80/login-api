import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetails() {
    let param = useParams();
    console.log("check param", param);
    const [details, setDetails] = useState({
        rating: { rate: 0 },
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
    });
    useEffect(() => {
        const getProdData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${param.id}`);
            const data = await response.json();
            setDetails(data)
        }
        getProdData();

    }, [])

    console.log("check api", details);

    // const rating = Math.floor(details.rating.rate);


    return (
        <Container>
            <Link to="/products" className='btn btn-outline-dark my-3'>
                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />
                Back to Products</Link>

            <Row>
                <Col md={7}>
                    <div style={{ maxWidth: '450px', margin: 'auto' }}>
                        <img src={details.image} alt='' width="100%" />
                    </div>
                </Col>
                <Col md={5}>
                    <h1 className='mt-5 fs-3'>{details.title}</h1>
                    <div className='mt-4'>
                        {details.rating && [...Array(5)].map((_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={index < Math.floor(details.rating.rate) ? fasStar : farStar}
                                className='text-warning'
                            />

                            // ({details.rating.rate})
                        ))}
                        <span className='ms-2 text-secondary'>({details.rating.rate})</span>
                    </div>
                    <div className=' text-primary fw-bold fs-4 mt-3'>${details.price}</div>
                    <hr />
                    <p className='mt-4 fs-6'>{details.description}</p>

                    <div>Category : <spanc className="fw-bold">{details.category}</spanc></div>

                    {/* <div>Count : {details.rating.count}</div> */}
                </Col>
            </Row>




            {/* {Object.keys(details).map((item, i) => (
                <h3>{item.title}</h3>
            ))} */}

            {/* {details ? details.Map((item, index) => (
                <div>{item.title}</div>
            )) : null} */}


            {/* {data ? data.map((item) => (
                <div>
                    <h3>{item.title}</h3>
                    <Link to={`/users/${item.id}`}>View more</Link>
                </div>
            )) : null} */}

        </Container>
    )
}
