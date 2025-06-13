import React, { useState } from 'react'
import { Link, useLocation, useNavigation, useParams, } from 'react-router-dom'
import Table from './Table'
import Form from './Form'
import { Container } from 'react-bootstrap';
import Banner from '../components/banner/Banner';

export default function Home(props) {

    const [dataFromChild, setDataFromChild] = useState('');

    function handleDataFromChild(s) {
        setDataFromChild({ data: [...dataFromChild, s] });
    }

    console.log("get Data from child", dataFromChild);

    const location = useLocation();
    const state = location.state


    console.log("check title", location);

    const bannerData = [
        {
            id: 1,
            title: 'Mystery Deals',
            image: 'https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: "Don't Miss",
            description: 'Online Only',
            buttonText: 'Discover Now'
        },
        {
            id: 2,
            title: 'Treat your selft',
            image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg',
            category: "Limited time only",
            description: 'Up to 50% off',
            buttonText: 'Shop Now'
        }
    ]

    return (
        <Container fluid className='p-0'>
            <Banner bannerData={bannerData} />
            <Container className='mt-3 p-0'>
                <h2 className='mb-4'>Home</h2>

                <Form sendDataToParent={handleDataFromChild} />
                {/* <Table data={dataFromChild} /> */}
            </Container>
        </Container>
    )
}
