import React, { Component } from "react";
import { Card, Button, CardDeck, CardGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      //show: false,
    };
    this.addToCart = this.addToCart.bind(this);
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

  addToCart = (product) => {
    // const cartItem= {productName:"product2",price:"12",quantity:"34" }
    const requestBody={
      
        "products": [
            {
            "productId":111,
            "productName":"IPhone",
            "price":520.0,
            "quantity":10
            },
            {
            "productId":111,
            "productName":"IPhone",
            "price":520.0,
            "quantity":10
            }
            
        ],
        "customer":{
            "firstName":"Ramesh"
            
            }
    }
    }
  

    // this.props.dispatch({ type: "ADD_TO_CART", payload: product });
  

   

  render() {
    const cardProducts = this.state.products.slice(0, 8);
    return (
      <div className="container-fluid">
        {/* <div className="row mt-1">
          {
        cardProducts.map((product) => (
        ))
        }
        </div> */}
        <div class="row">
          <div class="col-md-12">
            <h2 className="text-center text-uppercase font-weight-light position-relative">
              Trending <b className="text-warning">Products</b>
            </h2>
          </div>
        </div>
        <div className="row mt-1">
          {
            // this.state.products.map((product) => (
            cardProducts.map((product) => (
              <div
                className="col-xs-12 col-md-6 col-lg-3 "
                key={product.productId}
              >
                <CardGroup style={{ marginTop: "15px", width: "16.5rem" }}>
                  <Card className="border-0" >
                    <Link to={"/viewproduct/" + product.productId}  className="text-center align-middle">
                      <Card.Img
                        variant="top"
                        className="mx-auto"
                        style={{ height: 240, objectFit: "contain" }}
                        src={product.pictureUrl}
                      />
                    </Link>
                    <div>
                      <Card.Body>
                        <Card.Title className="">
                          <div className="text-center" style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}>
                            {product.productName}
                          </div>
                        </Card.Title>
                        <Card.Text>
                          {/* {product.specification}
              {product.dimension} */}
                          <div className="text-center">{product.dimension}</div>
                          <div className="text-center">
                            &#8377; {product.price}
                          </div>
                        </Card.Text>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            onClick={() => this.addToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </CardGroup>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Homepage);
// export default Homepage;
