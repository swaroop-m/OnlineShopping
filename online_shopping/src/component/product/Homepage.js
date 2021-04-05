import React, { Component } from "react";
import { Card, Button, CardDeck, CardGroup } from "react-bootstrap";
import axios from 'axios';

const addToCart =()=> {
  console.log("added to cart")
}

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
      <div className="container-fluid">
      <div className="row mt-1">
        {
        this.state.products.map((product) => (
          <div className="col-3" key={product.productId}>
            <CardGroup>
        <Card style={{ width: "18rem"}} key={product.productId} >
          <div className="text-center align-middle">
          <Card.Img variant="top" className="img-fluid rounded" max-width="100%" height="350"  style={{height: 300}} src={product.pictureUrl}/>
          </div>
              <div style={{height: 250}}>
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>
              {/* {product.specification}
              {product.dimension} */}
              {product.price}
              
            </Card.Text>
            <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
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

export default Homepage;
