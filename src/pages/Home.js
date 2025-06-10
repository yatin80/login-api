import React, { useState } from 'react'
import { Link, useLocation, useNavigation, useParams, } from 'react-router-dom'
import Table from './Table'
import Form from './Form'

export default function Home(props) {

    const [dataFromChild, setDataFromChild] = useState('');

    function handleDataFromChild(s) {
        setDataFromChild({ data: [...dataFromChild, s] });
    }

    console.log("get Data from child", dataFromChild);

    const location = useLocation();
    const state = location.state


    console.log("check title", location);

    return (
        <div>
            <h1>Home</h1>
            <Form sendDataToParent={handleDataFromChild} />
            <Table data={dataFromChild} />
        </div>
    )
}
