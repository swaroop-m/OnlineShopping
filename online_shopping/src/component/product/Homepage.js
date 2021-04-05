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
      <div className="row mt-1" >
        {
        this.state.products.map((product) => (
          <div className="col-xs-12 col-md-6 col-lg-3" key={product.productId}>
            <CardGroup style={{ marginTop:"15px" }}>
        <Card className="" style={{ width: "19rem"}} key={product.productId} >
          <div className="text-center align-middle" >
          <Card.Img variant="top" className="mx-auto" src={product.pictureUrl} style={{height: 290, objectFit: "contain"}}/>
          </div>
              <div > 
              {/* style={{height: 250}} col-6 bg-secondary text-light d-flex justify-content-center align-items-center*/}
          <Card.Body>
            <Card.Title className="" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{product.productName}</Card.Title>
            <Card.Text>
              {/* {product.specification}
              {product.dimension} */}
              &#8377; {product.price}
              
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
