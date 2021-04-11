import React, { Component } from "react";
import CardsOnHome from "./CardsOnHome";
import { Image } from "react-bootstrap";
import HorizontalGallery from "react-dynamic-carousel";
import { Link } from "react-router-dom";
import axios from "axios";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      productsInCategory: [],
      homeAndAppliences: [],
      telivision: [],
      mobiles: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/viewcategories")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categories: data });
        console.log(this.state.categories);
      });
    axios
      .get("http://localhost:9000/api/viewbycategory/Home & Accessories")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ homeAndAppliences: data });
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
    axios
      .get("http://localhost:9000/api/viewbycategory/Mobiles")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ mobiles: data });
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
    axios
      .get("http://localhost:9000/api/viewbycategory/Telivision")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ telivision: data });
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  }

  findProductInCategory = categoryName => {
    axios
      .get("http://localhost:9000/api/viewbycategory/"+categoryName)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ productsInCategory: data });
      })
      .catch((error) => {
        console.error("Error - " + error);
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
        {/* <CardsOnHome/> */}
        <div>
          <div>
            <h2>Shop By Categories:</h2>
            <span
              style={{
                position: "absolute",
                content: "",
                width: "100%",
                height: "0",
                top: "50",
                left: "0",
                borderTop: "1px dashed #bec5cb",
                zIndex: "-1",
              }}
            ></span>
          </div>

          <br />
          <br />
          <h3 className="text-uppercase font-weight-heavy position-relative">Mobile Phones</h3>
          <div className="row">
            <HorizontalGallery
              tiles={this.state.mobiles.filter(product=> product).map((product) => (
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
                    {/* <div
                      style={
                        {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }
                      }
                    >
                      {product.productName}
                    </div> */}
                  </div>
                </div>
              ))}
              elementWidth={190}
              fadeDistance={90}
            />
          </div>
          <br />
          <h3 className="text-uppercase font-weight-heavy position-relative">Telivisions</h3>
          <div className="row">
            <HorizontalGallery
              tiles={this.state.telivision.filter(product=> product).map((product) => (
                <div
                  key={product.productId}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 170,
                    height: 270,
                  }}
                >
                  <div>
                    <Link
                      to={"/viewproduct/" + product.productId}
                      className="text-left align-middle"
                    >
                      <Image
                        src={product.pictureUrl}
                        style={{ objectFit: "contain" }}
                        className="img-fluid rounded "
                      />
                    </Link>
                    <div>{product.productName}</div>
                  </div>
                </div>
              ))}
              elementWidth={190}
              fadeDistance={90}
              //   minPadding={80}
            />
          </div>
          <br />
          <h3 className="text-uppercase font-weight-heavy position-relative">Home And Appliences</h3>
          <div className="row">
            <HorizontalGallery
              tiles={this.state.homeAndAppliences.filter(product=> product).map((product) => (
                <div
                  key={product.productId}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 250,
                  }}
                >
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
              ))}
              elementWidth={200}
              fadeDistance={90}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
