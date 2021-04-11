import React, { Component } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import "./product.css";

class CarouselOnHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [],
          // nextIcon: <span className="glyphicon glyphicon-chevron-right"></span>,
          // prevIcon: <span className="glyphicon glyphicon-glass"></span>
        };
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
      }

  render() {
    const carouselProducts = this.state.products.slice(0,3);
    // const {nextIcon,prevIcon}=this.state;
    return (
      // <div>
          <div>
             {/* nextIcon ={<span className="bg-dark glyphicon-chevron-right"/>} prevIcon={<span className="bg-dark">&#xe080;</span>}*/ }
        <Carousel className="align-middle text-center">
        {
                  carouselProducts.map((product) => (
          <Carousel.Item className=" bg-light" interval={2500}  key={product.productId}>
            <Link to={"/viewproduct/" + product.productId}>
            <img
              className="text-center"
              style={{height:"500px", width:"670px",objectFit:"contain"}}
              src={product.pictureUrl}
            />
            </Link>
            {/* <Carousel.Caption className="text-dark"> */}
              {/* <h3>{product.productName}</h3>
              <p>{product.dimension}<br/>{product.specification}</p> */}
            {/* </Carousel.Caption> */}
          </Carousel.Item>
            ))
          }
          </Carousel>
      </div>
    );
  }
}

export default CarouselOnHome;
