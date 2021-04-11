import React, { Component } from "react";
import CardsOnHome from "./CardsOnHome";
import { Image } from "react-bootstrap";
import HorizontalGallery from "react-dynamic-carousel";
import { Link } from "react-router-dom";

// import Slider from "react-slick";
import axios from "axios";

class Shop1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInCategory:{},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/viewproductscategories")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ productsInCategory: data });
           console.log(this.state.productsInCategory);
      });
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container-fluid p-5">
        <div>
          <div>
            <h2>Shop By Categories:</h2>
          </div>
          <br /><br />
          {
          this.state.productsInCategory.map((category,products) => (
              <div key={category}>
          <h3 className="text-uppercase font-weight-heavy position-relative">{category}</h3>
          <div className="row">
            <HorizontalGallery
              tiles={products.filter(product=> product).map((product) => (
                <div
                  key={product.productId}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 310,
                  }}
                >
                  <div>
                    <Link
                      to={"/viewproduct/" + product.productId}
                      className="text-center align-middle"
                    >
                      <Image
                        src={product.pictureUrl}
                        style={{ objectFit: "contain" }}
                        className="img-fluid rounded "
                      />
                    </Link>
                  </div>
                </div>
              ))}
              elementWidth={190}
              fadeDistance={90}
              //   minPadding={80}
            />
          </div>
          <br />
          </div>
          )) }
        </div>
      </div>
    );
  }
}

export default Shop1;
