import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_1280.jpg" height="500px" width="100%"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" height="500px" width="100%"
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
            src="https://cdn.pixabay.com/photo/2016/11/29/06/18/apple-1867762_1280.jpg" height="500px" width="100%"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

                <h1 className="text-white"> some Images</h1>
                <h1 className="text-white">brand video</h1>

                
            </div>
        );
    }
} 

  export default Home;