import React, { Component } from 'react';
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';
import axios from 'axios';
import AddProductSuccessToast from "./AddProductSuccessToast";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            show: false
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/viewallproducts")
            .then(response => response.data)
            .then((data) => {
                this.setState({ products: data });
            });
    };

    // deleteProduct = (productId) => {
    //     this.props.deleteProduct(ProductId);
    //     setTimeout(() => {
    //         if(this.props.ProductObject != null) {
    //             this.setState({"show":true});
    //             setTimeout(() => this.setState({"show":false}), 3000);
    //             this.findAllProducts(this.state.currentPage);
    //         } else {
    //             this.setState({"show":false});
    //         }
    //     }, 1000);
    // };

    deleteProduct = (productId) => {
        axios.delete("http://localhost:9000/api/deleteproduct/"+productId)
        .then(response => {
            if(response.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                // alert("Product Deleted Succesfully!!");
                this.setState({
                    products : this.state.products.filter(product => product.productId != productId)
                });
            }
            else{
                this.setState({"show":false});
            }
            
        });
    };

    render() {
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                <AddProductSuccessToast show = {this.state.show} message = {"Product Deleted Successfully."} type = {"danger"}/>
                </div>
                <Card className="border bg-light">
                    {/* <Card.Header>
                        <FontAwesomeIcon icon={faList} /> List of Products
                    </Card.Header> */}
                    <Card.Body>
                        <h3><FontAwesomeIcon icon={faList} /> List of Products</h3>
                        <br />
                        <div className="table-responsive ">
                        <Table bordered hover striped className="table" variant="light">
                            <thead className="bg-primary text-white text-center">
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Dimension</th>
                                    <th>Specification</th>
                                    <th>Manufacturer</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="8">No Products Available.</td>
                                        </tr> :
                                        this.state.products.map((product) => (
                                            <tr key={product.productId}>
                                                <td className="text-center align-middle">
                                                    <Image src={product.pictureUrl} className="img-fluid rounded" width="60" height="65" /> {/*{product.productName}*/}
                                                </td>
                                                <td className="align-middle">{product.productName}</td>
                                                <td className="align-middle">{product.dimension}</td>
                                                <td className="align-middle">{product.specification}</td>
                                                <td className="align-middle">{product.manufacturer}</td>
                                                <td className="align-middle">{product.quantity}</td>
                                                <td className="align-middle">{product.price}</td>
                                                <td className="align-middle">{product.category?.categoryName}</td>
                                                <td className="text-center align-middle">
                                                    <ButtonGroup>
                                                        <Link to={"editproduct/" + product.productId} className="btn btn-md btn-outline-primary mr-2 rounded-0">
                                                            <FontAwesomeIcon icon={faEdit} />
                                                        </Link>{' '}
                                                <Button size="md" variant="outline-danger rounded-0" onClick={this.deleteProduct.bind(this, product.productId)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </Table>
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
    }
}

export default ProductList;