import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function Products() {
    const { text, setText } = useContext(MyContext)
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [data, setData] = useState();

    const pageLog = useLocation();
    const navigate = useNavigate();

    console.log("check location", pageLog);

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
    return (
        <Container>
            {/* <h2>Use Context : {text}</h2> */}
            <h2 className='my-3'>Products</h2>

            <Row>
                {data ? data.map((items, index) => (
                    <Col md={4} key={index} className='mb-4'>
                        <Card className='h-100'>
                            <div className='p-5'>
                                <Card.Img variant="top" src={items.image} style={{ height: '350px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <CardBody key={index}>

                                <h3 className='text-center fs-5 mb-3'>{items.title}</h3>
                                {/* <Link to={`/products/${items.id}`} className='btn btn-light'><FontAwesomeIcon icon={faEye} /></Link> */}
                                <div className='d-flex justify-content-end gap-2'>
                                    <Button onClick={() => productView(items.id)} className='btn btn-light border-1 border-dark'><FontAwesomeIcon icon={faEye} /></Button>
                                    <Button onClick={() => deletProd(items.id)} className='btn btn-light border-1 border-dark'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                )) : null}



            </Row>


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
