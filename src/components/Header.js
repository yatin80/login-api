import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';

export default function Header(props) {
    return (
        // <nav class="navbar navbar-dark bg-dark">
        //     <div class="container-fluid">
        //         <div class=" navbar-collapse" id="navbarText">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item"><Link to="/">Home</Link></li>
        //                 <li class="nav-item"><Link to="/about">About</Link></li>
        //                 <li class="nav-item"><Link to="/users">User</Link></li>
        //                 <li class="nav-item"><Link to="/contact">Contact</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className={`navbar shadow-sm navbar-expand-lg navbar-${props.navTheme}  bg-${props.navTheme}`}>
            <div className="container">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link active">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active">About</Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-link active">Contact</Link>
                        </li>
                    </ul>
                    {props.tagLine ?
                        <span className="navbar-text">
                            {props.tagLine}
                        </span> : null}
                </div>
            </div>
        </nav>
    )
}

// Header.propTypes = {
//     navTheme: propTypes.string,
//     tagLine: propTypes.string.isRequired
// }
Header.defaultProps = {
    navTheme: 'dark',
    tagLine: false
}