import React, { Component } from "react";
import axios from "axios";
import { Image, Button } from "react-bootstrap";
import HorizontalGallery from "react-dynamic-carousel";
import { Link, useHistory } from "react-router-dom";



class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    // this.state.show = false;
    // this.state.saving = 0;
    // this.state.method = "post";
    // this.state.category.categoryName: "",
    // this.productChange = this.productChange.bind(this);
    // this.submitProduct = this.submitProduct.bind(this);
    this.state.productsInCategory = [];
  }
  initialState = {
    productId: "",
    pictureUrl: "",
    productName: "",
    dimension: "",
    specification: "",
    manufacturer: "",
    quantity: 0,
    price: 0.0,
    categoryName: "",
  };

  findProductById = (productId) => {
    axios
      .get("http://localhost:9000/api/viewproduct/" + productId)
      .then((response) => {
        if (response.data != null) {
          this.setState({
            productId: response.data.
            productId,
            pictureUrl: response.data.pictureUrl,
            productName: response.data.productName,
            dimension: response.data.dimension,
            specification: response.data.specification,
            manufacturer: response.data.manufacturer,
            quantity: response.data.quantity,
            price: response.data.price,
            categoryName: response.data.category?.categoryName,
          });
        }
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  findProductsInCategory = (categoryName) => {
    axios
      .get("http://localhost:9000/api/viewbycategory/Home & Accessories")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ productsInCategory: data });
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

//   reloadPage = (id) => {
//     let history = useHistory();
//     window.history.push("/viewproduct/" + id)
//   }
//   sliderClick = (productId) => {
//     this.props.dispatch({type:'SLIDER_CLICK',payload:productId})
//  }

  componentDidMount() {
    const productId = +this.props.match.params.productId;
    if (productId) {
      this.findProductById(productId);
      this.findProductsInCategory(this.state.categoryName);
    }
  }

  render() {
    const {
      pictureUrl,
      productName,
      categoryName,
      dimension,
      specification,
      manufacturer,
      quantity,
      price,
    } = this.state;

    const ptitle = {
      fontSize: "15px",
      fontFamily: "Raleway, sans-serif",
      fontStyle: "normal",
      fontWeight: "300",
      color: "#333333",
      lineHeight: "1.6",
    };

    return (
      <div className="">
        {
        
          <div className="row d-flex align-items-center bg-light ">
            <div className="col-xs-12 col-md-6 col-lg-5 mr-auto float-left align-middle text-center border border-secondary">
              <Image
                src={pictureUrl}
                className="img-fluid rounded p-2"
                style={{
                  width: "500px",
                  height: "500px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6 ">
              <div className="" style={ptitle}>
                <h2
                  style={{
                    //fontFamily: "Raleway, sans-serif",
                    // fontWeight: "200",
                    // fontStyle: "normal",
                    marginBottom: "0em",
                    lineHeight: "1.4",
                    color: "#333333",
                  }}
                >
                  {productName}
                </h2>
              </div>
              <div className="fs-6">Category : {categoryName}</div>
              <br />
              <div className="fs-5">Dimension : {dimension}</div>
              <br />
              <div className="fs-5">Specification : {specification}</div>
              <br />
              <div className="fs-5">Manufacturer : {manufacturer}</div>
              <br />
              <div className="fs-4">Price : &#8377; {price}</div>
              <br />
              <div className="">
                <Button
                  variant="primary"
                  // onClick={() => this.addToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
              <br />
            </div>
          </div>
        }
        <br /><br />
        <div>
          <div className="row">
              <h2>You Might be interested in...</h2>
            <HorizontalGallery
              tiles={this.state.productsInCategory.map((product) => (
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
                    // to={this.reloadPage(product.productId)}
                    className="text-center align-middle"
                    target="_blank"
                    // onClick={window.history.go(0)}
                    // window.history.push("/viewproduct/" + product.productId)
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
              //   minPadding={80}
            />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default ViewProduct;
