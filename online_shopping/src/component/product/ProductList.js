import React, { Component } from 'react';
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';
import axios from 'axios';

class ProductList extends Component {
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    <div style={{ "float": "left" }}>
                        {/* <FontAwesomeIcon icon={faList} /> */}
                        List of Products
                    </div>
                </Card.Header>
                <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                  <th>Image</th>
                                  <th>Product Name</th>
                                  <th>Dimension</th>
                                  <th>Specification</th>
                                  <th>Manufacturer</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                    <tr align="center">
                                      <td colSpan="7">No Books Available.</td>
                                    </tr> 
                              </tbody>
                        </Table>
                    </Card.Body>
            </Card>
        );
    }
}

export default ProductList;