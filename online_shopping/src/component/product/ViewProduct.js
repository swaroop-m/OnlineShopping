import React, { Component } from "react";
import axios from "axios";
import { Image, Button } from "react-bootstrap";
import HorizontalGallery from "react-dynamic-carousel";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {apiAddToCart} from '../Cart/action'



class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    // this.state.show = false;
    // this.state.saving = 0;
    this.state.productsInCategory = [];
    this.state.currentProduct = {};
    this.addToCart = this.addToCart.bind(this);
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
            currentProduct: response.data,
          });
          // const categoryname = 
      this.findProductsInCategory(this.state.categoryName);
      console.log(this.state.productsInCategory);
        }
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  findProductsInCategory = (categoryname) => {
    axios
      .get("http://localhost:9000/api/viewbycategory/"+categoryname)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ 
          productsInCategory: data.filter(product => product).filter(product => product.productId != this.state.productId) 
        });
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  componentDidMount() {
    const productId = +this.props.match.params.productId;
    if (productId) {
      this.findProductById(productId);
      
    }
  }

  // addToCart = (product) => {
  //   // const cartItem= {productName:"product2",price:"12",quantity:"34" }

  //   this.props.dispatch({ type: "ADD_TO_CART", payload: product });
  // };

  // dispatch=useDispatch();

  addToCart =(product)=>{
    console.log(product)
    this.props.dispatch(apiAddToCart(product,[...this.props.cart.cart,product]));
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
      <div className="container">
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
                    marginBottom: "0em",
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
              <div >
                <Button className="buttonCart"
                  variant="warning"
                  onClick={() => this.addToCart(this.state.currentProduct)} size="lg" >
                  <AiOutlineShoppingCart size="1.5em"/><a style={{fontSize:'20px',color:'white'}}> Add to Cart</a> 
                </Button>
              </div>
              <br />
            </div>
          </div>
        }
        <br/><br />
        <div className="container-fluid p-5">
          <div className="row">
              <h2>You Might be interested in...</h2>
            <HorizontalGallery
              tiles={this.state.productsInCategory.filter(product=> product).map((product) => (
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
                    target="_blank"
                  >
                    <Image
                      src={product.pictureUrl}
                      style={{ objectFit: "contain" }}
                      className="img-fluid rounded "
                    />
                    
                  </Link>
                </div>
              ))}
              
              elementWidth={190}
              fadeDistance={90}
                // minPadding={80}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(ViewProduct);
