import React, { Component } from "react";
import CardsOnHome from "./CardsOnHome";
import { Image } from "react-bootstrap";
import HorizontalGallery from "react-dynamic-carousel";
import { Link } from "react-router-dom";

// import Slider from "react-slick";
import axios from "axios";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      productsInCategory: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/viewcategories")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categories: data });
      });
    // axios.get("http://localhost:9000/api/viewbycategory/"+categories[1])
    // .then(response => response.data)
    // .then((data) => {
    //     this.setState({ productsInCategory: data });
    // });
    axios
      .get("http://localhost:9000/api/viewallproducts")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        {/* <CardsOnHome/> */}
        <div>
          <div className="row">
            <HorizontalGallery
              tiles={this.state.products.map((product) => (
                <div
                  key={product.productId}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 250,
                    //     backgroundColor: "#D0D0D0",
                    //     borderRadius: 10,
                    // height:"auto",
                    // position: "relative",
                    // overflow: "hidden",
                    // display: "inline-block",
                    // backgroundSize:"cover",
                    // height:"200px", width:"70px"
                  }}
                >
                  <Link
                    to={"/viewproduct/" + product.productId}
                    className="text-center align-middle"
                  >
                    <Image
                      src={product.pictureUrl}
                      style={{objectFit: "contain",}}
                      className="img-fluid rounded "
                    />
                  </Link>
                </div>
                //     <div>
                //   <h1>{product.productName}</h1>
                // </div>
              ))}
              elementWidth={200}
              fadeDistance={90}
              //   minPadding={80}
            />
          </div>
        </div>
        <div className="row">
          
        </div>
      </div>
    );
  }
}

export default Shop;
