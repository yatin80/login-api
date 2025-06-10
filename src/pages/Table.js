import React from 'react'

export default function Table({ data }) {

    console.log("check table data", data);

    const dataArray = Object.values(data);

    console.log("array check", dataArray);

    // if (!Array.isArray(dataArray)) {
    //     return <p>No data to display</p>;
    // }
    if (!data || typeof data !== 'object') {
        return <p>No data to display</p>;
    }
    return (
        <div>
            <table border={'1'} cellPadding={'10'} align='left'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {/* if (Array.isArray(data)) {
                        data.map(item => (
                            <tr>
                                <td>{item.first}</td>
                                <td>{item.last}</td>
                                <td>{item.econtact}</td>
                            </tr>
                        ))
                    } else {
                        null
                    } */}


                    {dataArray ? dataArray.map((item, index) => (
                        <tr key={index}>
                            <td>{item.first}</td>
                            <td>{item.last}</td>
                            <td>{item.econtact}</td>
                        </tr>
                    )) : null}


                   
                </tbody>
            </table>
        </div>
    )
}
