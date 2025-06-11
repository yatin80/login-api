import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context';
import { Button, Card, CardBody, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function Products() {
    const { text, setText } = useContext(MyContext)
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [data, setData] = useState();
    const [show, setShow] = useState(false);

    const pageLog = useLocation();
    const navigate = useNavigate();

    console.log("check location", pageLog);

    const [prodDet, setProdDet] = useState();

    useEffect(() => {
        const getProdData = async () => {
            // const response = await fetch('https://fakestoreapi.com/products?limit=5');
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setData(data)
        }

        getProdData();

    }, [])
    console.log("get prod data", data);

    // useEffect(()=>{
    //     const deleteProdData = async () => {
    //         const response = await fetch('https://fakestoreapi.com/products/4', {
    //             method:"DELETE"
    //         })
    //         const data = await response.json();
    //         setData(data)
    //     }
    //     deleteProdData()
    // },[])
    const productView = (id) => {
        navigate(`/products/${id}`)
    }
    const deletProd = (id) => {
        // alert(id)

        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://fakestoreapi.com/products/${id}`, {
                            method: 'DELETE'
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log("Detlet data", data)
                                setData(prevData => prevData.filter(item => item.id !== id));
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        console.log('No')
                    }
                }
            ]
        })


        // fetch(`https://fakestoreapi.com/products/${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("Detlet data", data)
        //         setData(prevData => prevData.filter(item => item.id !== id));
        //     });



        // data.delete(`$(id)`)
        // setData(
        //     data.filter((item)=>{
        //         return item.id !== id
        //     })
        // )
        // alert(data)
    }

    const handleClose = () => {
        setShow(false);
        setProdDet(null);
    };
    const handleShow = (id) => {
        setShow(true);
        fetch(`https://fakestoreapi.com/products/${id}`)

            .then(response => response.json())
            .then(data => {
                console.log("single data", data);
                setProdDet(data);
            });
    };

    const addToCart = (id) => {
        console.log("add to cart", id);
        const cart = { userId: 1, products: [{ id: id, quantity: 1 }] };
        fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return (
        <Container>
            {/* <h2>Use Context : {text}</h2> */}
            <h2 className='my-3'>Products</h2>

            <Row>
                {data ? data.map((items, index) => (
                    <Col md={3} key={index} className='mb-4'>
                        <Card className='h-100'>
                            <div className='p-4 user-select-pointer' onClick={() => handleShow(items.id)}>
                                <Card.Img variant="top" src={items.image} style={{ height: '220px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <CardBody key={index}>

                                <h3 className='text-center fs-6 mb-3  text-truncate w-100' style={{ lineClamp: 2, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box', overflow: 'hidden' }}>{items.title}</h3>
                                {/* <Link to={`/products/${items.id}`} className='btn btn-light'><FontAwesomeIcon icon={faEye} /></Link> */}
                                <div className='d-flex justify-content-end gap-2'>
                                    <Button onClick={() => productView(items.id)} className='btn btn-light border-1 border-dark'><FontAwesomeIcon icon={faEye} /></Button>
                                    <Button onClick={() => addToCart(items.id)} className='btn btn-light border-1 border-dark'><FontAwesomeIcon icon={faCartPlus} /></Button>
                                    <Button onClick={() => deletProd(items.id)} className='btn btn-light border-1 border-dark'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                )) : null}



            </Row>

            <Offcanvas show={show} placement="end" className="w-50" onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    {prodDet ? (
                        <div>
                            <div className='text-center border p-3'>
                                <img src={prodDet.image} alt={prodDet.title} style={{ width: '250px', height: 'auto' }} />
                            </div>
                            <h3 className='mt-3'>{prodDet.title}</h3>
                            <p className='mt-4 fs-6'>{prodDet.description}</p>
                            <p className='text-primary fw-bold fs-4 mt-3'>${prodDet.price}</p>
                            <div>Category : <spanc className="fw-bold">{prodDet.category}</spanc></div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Offcanvas.Body>
            </Offcanvas>


            {/* <ul>
                {data ? data.map((items, index) => (
                    <div key={index}>

                        <h3>{items.title}</h3>
                        <Link to={`/users/${items.id}`}>View more</Link>
                        <button onClick={() => deletProd(items.id)}>Delete  {items.id}</button>
                    </div>
                )) : null}
                
            </ul> */}
        </Container>
    )
}
