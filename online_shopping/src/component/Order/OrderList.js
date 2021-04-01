import React, { Component } from 'react';
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';
import axios from 'axios';

class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/viewallorders")
            .then(response => response.data)
            .then((data) => {
                this.setState({ orders: data });
            });
    }
    render() {
        return (
            <div>
                <Card className="border bg-light">
                    <Card.Header>
                        <FontAwesomeIcon icon={faList} /> List Of Orders
                </Card.Header>
                    <Card.Body>
                        <h3><FontAwesomeIcon icon={faList} /> Orders</h3>
                        <Table bordered hover striped variant="light">
                            <thead className="bg-primary text-white text-center">
                                <tr>
                                    <th>Order Date</th>
                                    <th>Order Status</th>
                                    <th>Customer Details</th>
                                    <th>Delivery Address</th>
                                    <th>Product List</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="7">No Orders Available.</td>
                                        </tr> :
                                        this.state.orders.map((order) => (
                                            <tr key={order.orderID}>
                                                <td>{order.orderDate}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.customer}</td>
                                                <td>{order.deliveryAddress}</td>
                                                <td>{order.productList}</td>
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

export default OrderList;