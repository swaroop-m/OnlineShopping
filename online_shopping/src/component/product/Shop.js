import React, { Component } from "react";
import CardsOnHome from "./CardsOnHome";
import HorizontalGallery from "react-dynamic-carousel";

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
                    width: 250,
                    height: 350,
                    backgroundColor: "#D0D0D0",
                    borderRadius: 10,
                  }}
                >
                  <h1>{product.productName}</h1>
                </div>
              ))}
              elementWidth={250}
              fadeDistance={100}
              minPadding={20}
            />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Shop;
