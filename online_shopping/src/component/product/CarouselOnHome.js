import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import axios from "axios";

class CarouselOnHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [],
          product1: {},
          product2: {},
          product3: {},
          //show: false,
        };
        // this.addToCart = this.addToCart.bind(this);
      }

      componentDidMount() {
        axios
          .get("http://localhost:9000/api/viewallproducts")
          .then((response) => response.data)
          .then((data) => {
            this.setState({ products: data });
          })
          .catch((error) => {
            console.error("Error - " + error);
          });
        const product1 = this.state.products[-1];
        const product2 = this.state.products[-2];
        const product3 = this.state.products[-3];
      }

  render() {
    const carouselProducts = this.state.products.slice(-3);
    const product1 = this.state.products[-1];
    const product2 = this.state.products[-2];
    const product3 = this.state.products[-3];
    return (
      <div>
          <div>
              {
                  carouselProducts.map((product) => (
        <Carousel className="align-middle text-center">
        
          <Carousel.Item className="" key={product.productId}>
            <img
              className="text-center"
              style={{height:"400px", width:"470px",objectFit:"contain"}}
              src={product.pictureUrl}
              //alt="First slide"
            />
            <Carousel.Caption>
              <h3>{product.productName}</h3>
              <p>{product.dimension}<br/>{product.specification}</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item className="" style={{height:"400px", width:"470px",objectFit:"contain"}} key={product2.productId}>
            <img
              className="d-block text-center"
            //   style={{height:"400px", width:"470px",objectFit:"contain"}}
              src={product2.pictureUrl}
              //alt="First slide"
            />
            <Carousel.Caption>
              <h3>{product2.productName}</h3>
              <p>{product2.dimension}<br/>{product2.specification}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="" style={{height:"400px", width:"470px",objectFit:"contain"}} key={product3.productId}>
            <img
              className="d-block text-center"
            //   style={{height:"400px", width:"470px",objectFit:"contain"}}
              src={product3.pictureUrl}
              //alt="First slide"
            />
            <Carousel.Caption>
              <h3>{product3.productName}</h3>
              <p>{product3.dimension}<br/>{product3.specification}</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
                  ))
          }
      </div>
      </div>
    );
  }
}

export default CarouselOnHome;
