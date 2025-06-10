import React, { useState } from 'react'

async function LoginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    
}

export default function Login() {
    const [user, SetUser] = useState();
    const [password, setPassword] = useState();
  
    const userChange = (event) => {
        SetUser(event.target.value)
    }
    const passChange = (event) => {
        setPassword(event.target.value)
    }

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const response = await LoginUser({
    //         user,
    //       password
    //     });
    //     if ('accessToken' in response) {
    //       console.log("Access");
    //     } else {
    //         console.log("Error");
    //     }
    //   }

    console.log("check value", user, password);
    return (
        <div>
            <form>
                <div>
                    <input type='email' value={user} onChange={userChange} />
                </div>
                <div>
                    <input type='password' value={password} onChange={passChange} />
                </div>
                <div>
                    <input type='submit' value="Submit" />
                </div>
            </form>
        </div>
    )
}
