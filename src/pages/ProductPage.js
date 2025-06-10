import React, { useEffect, useState } from 'react'
import ProductItem from '../components/productItem/ProductItem'
import MyLoader from '../components/MyLoader';

export default function ProductPage() {
    const [prodData, setProdData] = useState();
    const [limit, setLimit] = useState(7);
    const [loading, setLoading] = useState(true);

    const [selectValue, setSelectValue] = useState('red');

    useEffect(() => {
        const productItem = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProdData(data)
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        };

        productItem()
    }, [])

    const handleChange = (e) => {
        setSelectValue(e.target.value)
    }
    return (
        <div>
            <h2>Products</h2>
            {selectValue}
            <div>
                <select onChange={handleChange} id="colours">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
            {
                selectValue === 'red' ? <div>REd</div> : null
            }

            <div className='prod-main-box'>
                {/* {prodData.map((prodDataItem) =>
                    <ProductItem prodName={prodDataItem.title} imgUrl={prodDataItem.image} prodPrice={prodDataItem.price} prodDesc={prodDataItem.description} />
                )
                } */}

                {/* {prodData ?
                    prodData.slice(0, limit ? limit : prodData.length).map((item) => (
                        loading ? 
                        <MyLoader key={item.id} /> :
                        <ProductItem prodName={item.title} imgUrl={item.image} prodPrice={item.price} prodDesc={item.description} key={item.id} innerLoading={loading} />
                    ))
                    : null
                } */}

                {prodData ?
                    prodData.map((item) => (
                        loading ?
                            <MyLoader key={item.id} /> :
                            <ProductItem prodName={item.title} imgUrl={item.image} prodPrice={item.price} prodDesc={item.description} key={item.id} innerLoading={loading} />
                    ))
                    : null
                }



            </div>
        </div>
    )
}
