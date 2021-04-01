import React, { Component } from 'react';
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';
import axios from 'axios';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/viewallproducts")
            .then(response => response.data)
            .then((data) => {
                this.setState({ products: data });
            });
    }
    render() {
        return (
            <div>
                <Card className="border bg-light">
                    <Card.Header>
                        <FontAwesomeIcon icon={faList} /> List of Products
                </Card.Header>
                    <Card.Body>
                        <h3><FontAwesomeIcon icon={faList} /> List of Products</h3>
                        <Table bordered hover striped variant="light">
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
                                            <td colSpan="7">No Products Available.</td>
                                        </tr> :
                                        this.state.products.map((product) => (
                                            <tr key={product.productId}>
                                                <td className="text-center">
                                                    <Image src={product.pictureUrl} roundedCircle width="75" height="100" /> {/*{product.productName}*/}
                                                </td>
                                                <td>{product.productName}</td>
                                                <td>{product.dimension}</td>
                                                <td>{product.specification}</td>
                                                <td>{product.manufacturer}</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        {/* <Link to={"edit/" + product.id} className="btn btn-sm btn-outline-primary"> */}
                                                        <FontAwesomeIcon icon={faEdit} />
                                                        {/* </Link> */}{' '} &nbsp;&nbsp;&nbsp;
                                                <Button size="sm" variant="outline-danger" /*onClick={this.deleteBook.bind(this, product.id)}*/>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
    }
}

export default ProductList;