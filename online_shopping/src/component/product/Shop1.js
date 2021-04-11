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
    this.findProductInCategory = this.findProductInCategory.bind(this);
    this.state = {
      products: [],
      categories: [],
      productsInCategory: [],
      homeAndAppliences: [],
      telivision: [],
      mobiles: [],
      p: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/viewcategories")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categories: data });
        console.log(this.state.categories);
        this.state.categories.forEach((category) => {
            this.state.p = (category) => this.findProductInCategory(category);
            console.log(this.state.p);
            this.state.productsInCategory.push([category,this.state.p]);
          //   this.setState({ productsInCategory: productsInCategory + {products} });
           })
           
           console.log(this.state.productsInCategory);
      });

    //   words.forEach((word) => {
    //     console.log(word);
    //   });

    //   this.state.categories.forEach((category) => {
        //   var products = this.findProductInCategory(category);
        //   this.state.productsInCategory.push([category,products]);
        //   this.setState({ productsInCategory: productsInCategory + {products} });
        //  })
         
         console.log(this.state.productsInCategory);
    //   this.state.productsInCategory = () => this.findProductInCategory() 
    //   this.setState({ productsInCategory: data });
    //   this.findProductInCategory(categories);
    axios
      .get("http://localhost:9000/api/viewbycategory/Mobiles")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ mobiles: data });
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
        <div>
          <div>
            <h2>Shop By Categories:</h2>
          </div>
          <br /><br />
          {
          this.state.categories.map((category,index) => (
              <div key={index}>
          <h3 className="text-uppercase font-weight-heavy position-relative">{category}</h3>
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
