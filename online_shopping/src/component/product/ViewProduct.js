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

        const ptitle =  {

            fontSize: "15px",
            fontFamily: "Raleway, sans-serif",
            fontStyle: "normal",
            fontWeight: "300",
            color: "#333333",
            lineHeight: "1.6"
        
        };

        return (
            <div>
                {
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-6 float-left align-middle text-center">
                        <Image src={pictureUrl} className="img-fluid rounded" style={{width:"60", height:"65"}} />
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6">
                    <div className=" " style={ptitle}>
                            <h1 style= {{   fontFamily: "Raleway, sans-serif",
                                            fontWeight: "200",
                                            fontStyle: "normal",
                                            textRendering: "optimizeLegibility",
                                            margin: "0 0 1em",
                                            marginBottom: "1em",
                                            lineHeight: "1.4",
                                            color: "#333333"

                                        }}>{productName}</h1>
                        </div>
                        <div className="fs-6">
                           Category : {categoryName}
                        </div>
                        <br />
                        <div className="fs-5">
                           Dimension : {dimension}
                        </div>
                        <br />
                        <div className="fs-5">
                           Specification : {specification}
                        </div>
                        <br />
                        <div className="fs-5">
                           Manufacturer : {manufacturer}
                        </div>
                        <br />
                        <div className="fs-4">
                           Price : &#8377; {price}
                        </div>
                        <br />
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default ViewProduct;