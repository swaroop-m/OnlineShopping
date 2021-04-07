import React, { Component } from "react";
import { Card, Button, CardDeck, CardGroup } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      show: false,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/viewallproducts")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ products: data });
      });
  }

  addToCart = (product) => {
    // const cartItem= {productName:"product2",price:"12",quantity:"34" }

    this.props.dispatch({ type: "ADD_TO_CART", payload: product });
  };

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
        <div className="row mt-1">
          {
            // this.state.products.map((product) => (
            cardProducts.map((product) => (
              <div
                className="col-xs-12 col-md-6 col-lg-2"
                key={product.productId}
              >
                <CardGroup style={{ marginTop: "15px", width: "11rem" }}>
                  <Card className="" >
                    <div className="text-center align-middle">
                      <Card.Img
                        variant="top"
                        className="mx-auto"
                        style={{ height: 190, objectFit: "contain" }}
                        src={product.pictureUrl}
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <Card.Title
                          className=""
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {product.productName}
                        </Card.Title>
                        <Card.Text>
                          {/* {product.specification}
              {product.dimension} */}
                          {product.quantity}
                          {product.price}
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => this.addToCart(product)}
                        >
                          Add to Cart
                        </Button>
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
