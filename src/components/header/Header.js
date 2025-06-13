import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import propTypes from 'prop-types';
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import Search from './Search';
import HeaderAction from './HeaderAction';

export default function Header(props) {
    const isAuthenticate = localStorage.getItem('token') ? true : false;
    const location = useLocation();
    const locationPath = location.pathname;


    return (
        // <Navbar expand="lg" className="position-fixed top-0 w-100 z-3" data-bs-theme="dark">
        <Navbar expand="lg" className={`header-nav ${locationPath === "/" ? "" : "header-nav-static"}`} data-bs-theme="light">
            <Container>
                <NavbarBrand href="/">Logo</NavbarBrand>
                <div className='d-flex align-items-center order-2'>
                    <Search />
                    <HeaderAction isAuthenticate={isAuthenticate} />

                    <NavbarToggle aria-controls="basic-navbar-nav" className='order-5 ms-3 btn-user px-2' />
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className=''>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Shop</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

        // <nav className={`navbar shadow-sm navbar-expand-lg navbar-${props.navTheme}  bg-${props.navTheme}`}>
        //     <div className="container">
        //         <a className="navbar-brand" href="/">Logo</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarText">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link to="/" className="nav-link active">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/products" className="nav-link active">Products</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/about" className="nav-link active">About</Link>
        //                 </li>

        //                 <li className='nav-item'>
        //                     <Link to="/contact" className="nav-link active">Contact</Link>
        //                 </li>
        //             </ul>
        //             {props.tagLine ?
        //                 <span className="navbar-text fw-semibold text-primary">
        //                     {props.tagLine}
        //                 </span> : null}

        //             {isAuthenticate ? (
        //                 <Button variant="outline-dark" size='sm' className='ms-3' onClick={() => logOutHandle()}>
        //                     Logout
        //                 </Button>
        //             ) : (
        //                 <Button variant="outline-dark" size='sm' className='ms-3' onClick={() => signInHandle()}>
        //                     Sign In
        //                 </Button>
        //                 // <Link to="/sign-in" className='ms-3 text-decoration-none border border-dark rounded-3 px-2 py-1 text-dark'>
        //                 //     Sign In
        //                 // </Link>
        //             )}
        //             <Button variant="outline-dark" size='sm' className='ms-3' onClick={() => cartData()}>
        //                 <FontAwesomeIcon icon={faCartShopping} size='sm' />
        //                 <span className='ms-2'>Cart</span>
        //             </Button>
        //         </div>
        //     </div>
        // </nav>
    )
}

// Header.propTypes = {
//     navTheme: propTypes.string,
//     tagLine: propTypes.string.isRequired
// }
Header.defaultProps = {
    navTheme: 'light',
    tagLine: false
}