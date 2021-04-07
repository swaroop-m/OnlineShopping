import React, { Component } from 'react';
import axios from "axios";
import {Image}   from "react-bootstrap";
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
          categoryName: ""
      };

    findProductById = (productId) => {
        axios
          .get("http://localhost:9000/api/viewproduct/" + productId)
          .then((response) => {
            if (response.data != null) {
              this.setState({
                productId: response.data,
                productId,
                pictureUrl: response.data.pictureUrl,
                productName: response.data.productName,
                dimension: response.data.dimension,
                specification: response.data.specification,
                manufacturer: response.data.manufacturer,
                quantity: response.data.quantity,
                price: response.data.price,
                categoryName: response.data.category?.categoryName
                
              });
            }
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
        return (
            <div>
                {
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-6 align-middle text-center" style={{width:"600", height:"650"}}>
                    <Image src={pictureUrl} className="img-fluid rounded" style={{width:"60", height:"65"}} />
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default ViewProduct;