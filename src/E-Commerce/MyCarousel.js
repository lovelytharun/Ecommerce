import React from 'react';
import { Carousel } from 'react-bootstrap';
import Carousellmage from './Carousellmage';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide3 from '../assets/slide3.jpg';

const MyCarousel = () => {
  const arrowStyles = {
    fontSize: '80px',
    color: 'grey',
    lineHeight: '1.5',
    borderRadius: '50%', 
    display: 'inline-block', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease'
  };

  return (
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>} style={{border : "2px solid lightblue"}}>
      <Carousel.Item>
        <Carousellmage src={slide4} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousellmage src={slide5} alt="Second Image" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousellmage src={slide3} alt="Third Image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;