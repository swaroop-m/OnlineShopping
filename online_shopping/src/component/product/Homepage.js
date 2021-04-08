import React, { Component } from "react";
import { Card, Button, CardDeck, CardGroup } from "react-bootstrap";
import axios from 'axios';
import { connect } from "react-redux";


class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      show: false,
    };
    this.addToCart=this.addToCart.bind(this);
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
      this.props.dispatch({type:'ADD_TO_CART',payload:product})
   }

  render() {
    return (
      <div className="container-fluid">
      <div className="row mt-1">
        {
        this.state.products.map((product) => (
          <div className="col-xs-12 col-md-6 col-lg-3" key={product.productId}>
            <CardGroup>
        <Card className="" style={{ width: "19rem"}} key={product.productId} >
          <div className="text-center align-middle">
          <Card.Img variant="top" className="mx-auto" style={{height: 290, objectFit: "contain"}} src={product.pictureUrl}/>
          </div>
              <div > 
              {/* style={{height: 250}} */}
          <Card.Body>
          
            <Card.Title className="" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{product.productName}</Card.Title>
            <Card.Text>
              {/* {product.specification}
              {product.dimension} */}
              Quantity: {product.quantity}<br/>
              Price: ₹{product.price}
              
            
              
            </Card.Text>
            <Button variant="primary" onClick={()=>this.addToCart(product)}>Add to Cart</Button>
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

  return { cart:state.cart }
}

export default connect(mapStateToProps)(Homepage)
// export default Homepage;
