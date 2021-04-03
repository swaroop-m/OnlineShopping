import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from 'axios';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      show: false,
    };
  }

  componentDidMount() {
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
        {
        this.state.products.map((product) => (
        <Card style={{ width: "18rem" }} key={product.productId}>
          <Card.Img variant="top" src="holder.js/100px180" src={product.pictureUrl}/>
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>
              {product.specification}
              {product.dimension}
              {product.price}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        ))
        }
      </div>
    );
        
  }
}

export default Homepage;
