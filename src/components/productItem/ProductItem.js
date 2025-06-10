import React from 'react'
import './style.css'

export default function ProductItem(props) {
    return (
        <div className="card">
            <div style={{ padding: '20px' }}>
                <div className='prodImg'>
                    {
                        props.innerLoading ?
                            <p>Loadding...</p>
                            :
                            <img src={props.imgUrl} alt="Denim Jeans" width='100%' />
                    }
                </div>
                <h3>{props.prodName}</h3>
                <p className="price">$ {props.prodPrice}</p>
                <p>{props.prodDesc}</p>
                <p><button>Add to Cart</button></p>
            </div>
        </div>
    )
}
