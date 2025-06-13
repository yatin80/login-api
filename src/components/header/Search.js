import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Search() {
    return (
        <div className='position-relative d-none align-items-center order-2 d-lg-flex'>
            <input type="text" placeholder='Search' className='header-search' />
            <Button variant="link" size='sm' className='header-search-btn'>
                <FontAwesomeIcon icon={faSearch} size='lg' />

            </Button>
        </div>
    )
}
