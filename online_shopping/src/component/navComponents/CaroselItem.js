
import { Carousel } from 'react-bootstrap';
import React from 'react'

const CaroselItem = () => {
    return (
      <Carousel fade={true} pause={false} style={{height:450}}>
    
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_1280.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/09/18/11/35/vinyl-records-945396_1280.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_1280.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

      </Carousel>
    )
  }
  



export default CaroselItem






