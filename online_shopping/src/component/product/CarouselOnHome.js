import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import axios from "axios";

class CarouselOnHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [],
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
          });
      }

  render() {
    const carouselProducts = this.state.products.slice(-3);
    return (
      <div>
          <div>
              {
                  carouselProducts.map((product) => (
        <Carousel>
          <Carousel.Item  key={product.productId}>
            <img
              className="d-block text-center"
              style={{height:600}}
              src={product.pictureUrl}
              //alt="First slide"
            />
            <Carousel.Caption>
              <h3>{product.productName}</h3>
              <p>{product.dimension}<br/>{product.specification}</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
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
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
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
