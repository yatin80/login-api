import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import './style.scss';
import { Button, Stack } from 'react-bootstrap';

export default function Banner(props) {

  const { bannerData } = props;

  const settings = {
    autoPlay: false,
    interval: 3000,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    showIndicators: bannerData.length > 1 ? true : false,
    
  }

  return (
    <Stack className='banner-container'>
      <Carousel {...settings}>
        {bannerData.map((item, index) => (
          <Stack key={index}>
             <img src={item.image || Banner.defaultProps.bannerData[0].image} />
            <div className='title-details'>
              <h6>{item.category}</h6>
              <h1>{item.title || Banner.defaultProps.bannerData[0].title}</h1>
              <p>{item.description}</p>
              <Button variant='outline-light' className='rounded-pill px-4 py-2 mt-4'>{item.buttonText}</Button>
            </div>
          </Stack>
        ))}

      </Carousel>
    </Stack>
  )
}   

Banner.defaultProps = {
  bannerData: [{
    image: 'https://images.pexels.com/photos/1008206/pexels-photo-1008206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mystery Deals',
    category: "Don't Miss",
    description: 'Online Only',
    buttonText: 'Discover Now'
  }]
}