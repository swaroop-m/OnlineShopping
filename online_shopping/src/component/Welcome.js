import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Card, Carousel } from 'react-bootstrap'
import Homepage from './product/Homepage'

class Welcome extends Component {
    render() {
        return (
            <div>
                 <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2020/09/28/16/29/leaves-5610361_1280.png"
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
      src="https://cdn.pixabay.com/photo/2021/02/22/08/41/crocus-6039312_1280.jpg"
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
      src="https://cdn.pixabay.com/photo/2021/02/22/08/41/crocus-6039312_1280.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                <Homepage/>
                
            </div>
        );
    }
}

export default Welcome