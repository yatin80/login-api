import { faCartShopping, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function HeaderAction(props) {
    const navigate = useNavigate();

    const logOutHandle = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    const signInHandle = () => {
        navigate('/sign-in');
    }

    const cartData = () => {
        navigate('/cart');
    }
    return (
        <div className='d-flex align-items-center order-3'>
            {/* {props.tagLine ?
                <span className="navbar-text fw-semibold text-primary">
                    {props.tagLine}
                </span> : null} */}

            {props.isAuthenticate ? (
               
                <Button className='ms-3 btn-user' onClick={() => logOutHandle()}>
                <FontAwesomeIcon icon={faSignOut} size='1x' />
            </Button>
            ) : (
                <Button className='ms-3 btn-user' onClick={() => signInHandle()}>
                    <FontAwesomeIcon icon={faUser} size='1x' />
                </Button>
               
            )}
            <Button className='ms-3 btn-user' onClick={() => cartData()}>
                    <FontAwesomeIcon icon={faCartShopping} size='1x' />
                </Button>
            {/* <Button variant="outline-dark" size='sm' className='ms-3' onClick={() => cartData()}>
                <FontAwesomeIcon icon={faCartShopping} size='sm' />
                <span className='ms-2'>Cart</span>
            </Button> */}
        </div>
    )
}
