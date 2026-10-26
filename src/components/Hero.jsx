import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='full-carousel-wrapper'>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
        <Carousel.Item>
          <div
            className='carousel-bg-image'
            style={{ backgroundImage: `url('assets/1.webp')` }}
          >
            <Carousel.Caption className='custom-caption'>
              <span className='subtitle'>-The art of fine jewellery</span>
              <h1 className='main-title'>Quiet luxury. Made for your days</h1>
              <p className='description'>
                Light chains, studs, and pendants designed to move with you from
                morning to evening.
              </p>
              <Button className='btn-shop'>Shop everyday gold &rarr;</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className='carousel-bg-image'
            style={{ backgroundImage: `url('assets/1.webp')` }}
          >
            <Carousel.Caption className='custom-caption'>
              <span className='subtitle'>THE BRIDAL EDIT</span>
              <h1 className='main-title'>Quiet luxury. Made for your days</h1>
              <p className='description'>
                Light chains, studs, and pendants designed to move with you from
                morning to evening.
              </p>
              <Button className='btn-shop'>Shop everyday gold &rarr;</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className='carousel-bg-image'
            style={{ backgroundImage: `url('assets/1.webp')` }}
          >
            <Carousel.Caption className='custom-caption'>
              <span className='subtitle'>Discover heritage</span>
              <h1 className='main-title'>Quiet luxury. Made for your days</h1>
              <p className='description'>
                Light chains, studs, and pendants designed to move with you from
                morning to evening.
              </p>
              <Button className='btn-shop'>Shop everyday gold &rarr;</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className='carousel-bg-image'
            style={{ backgroundImage: `url('assets/2.webp')` }}
          >
            <Carousel.Caption className='custom-caption'>
              <span className='subtitle'>Everyday gold</span>
              <h1 className='main-title'>Elegant Rings Collection</h1>
              <p className='description'>
                Find the perfect ring for your special moments and everyday
                luxury.
              </p>
              <Button className='btn-shop'>Shop everyday gold &rarr;</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
