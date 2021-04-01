import React, { Component } from 'react';
import { Card, Form, Button, Col, InputGroup, Image } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
// import {faSave} from '@fontawesome/free-solid-svg-icons'

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {productName: '', dimension: '', specification: '', manufacturer: '', quantity: 0, price: 0.0 };
        
        this.productChange = this.productChange.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
    }
    // initialState = {productName: '', dimension: '', specification: '', manufacturer: '', quantity: 0, price: 0.0 };

    submitProduct(event) {
        alert(this.state.title);
        event.preventDefault();
    }

    productChange(event)  {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <div>
                <Card className="border bg-light">
                <Card.Header>
                        <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Product" : "Add New Product"}
                    </Card.Header>
                    <Form onSubmit={this.submitProduct} id="productFormId" >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                    <Form.Label>Product Photo URL</Form.Label>
                                    <InputGroup>
                                        <Form.Control required
                                            type="test" name="productPhotoURL"
                                            // value={coverPhotoURL} onChange={this.bookChange}
                                            // className={"bg-dark text-white"}
                                            placeholder="Enter Product Cover Photo URL" />
                                        {/* <InputGroup.Append>
                                    {this.state.coverPhotoURL !== '' && <Image src={this.state.coverPhotoURL} roundedRight width="40" height="38"/>}
                                </InputGroup.Append> */}
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control required
                                        type="test" name="productName"
                                        value={this.state.productName}
                                        onChange={this.productChange}
                                        // className={"bg-dark text-white"}
                                        placeholder="Enter Product Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDimension">
                                    <Form.Label>Dimension</Form.Label>
                                    <Form.Control
                                        type="test" name="dimension"
                                        value={this.state.dimension}
                                        onChange={this.productChange}
                                        // className={"bg-dark text-white"}
                                        placeholder="Enter Product Dimension" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSpecification">
                                    <Form.Label>Specification</Form.Label>
                                    <Form.Control
                                        type="test" name="specification"
                                        value={this.state.specification}
                                        onChange={this.productChange}
                                        // className={"bg-dark text-white"}
                                        placeholder="Enter Product specification" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridManufacturer">
                                    <Form.Label>Manufacturer</Form.Label>
                                    <Form.Control
                                        type="test" name="manufacturer"
                                        value={this.state.manufacturer}
                                        onChange={this.productChange}
                                        // className={"bg-dark text-white"}
                                        placeholder="Enter Product manufacturer" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridQuantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control required
                                        type="test" name="quantity"
                                        value={this.state.quantity}
                                        onChange={this.productChange}
                                        // className={"bg-dark text-white"}
                                        placeholder="Enter Product quantity" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required
                                        type="test" name="price"
                                        value={this.state.price}
                                        onChange={this.productChange}
                                        // className={"bg-dark text-white"}
                                        placeholder="Enter Product price" />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
                        </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}
                        <Button size="sm" variant="info" type="button" /*onClick={this.bookList.bind()}*/>
                            <FontAwesomeIcon icon={faList} /> Product List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
                <hr />
                {/* <div className="card border border-dark bg-dark text-white">
                    <div className="card-header">
                        Add a Product
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label>Title</label>
                                    <input name="email" className="form-control bg-dark text-white" placeholder="email" />
                                </div>
                                <div className="col">
                                    <label >Password</label>
                                    <input name="password" className="form-control bg-dark text-white" />
                                </div>
                            </div>
                        </form>
                        <a className="btn btn-primary">Add Product</a>
                    </div>
                </div>*/}
                <br />
            </div>
        );
    }
}

export default Product;