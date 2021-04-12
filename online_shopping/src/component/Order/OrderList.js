import React, { Component } from 'react';
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import axios from 'axios';
import OrderToast from "./OrderToast";
//Author : Aishwarya A S
//Code Starts here
class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            orders: [],
            show: false,
            currentPage: 1,
            ordersPerPage: 10

        };

    }


    componentDidMount() {
        this.findAllOrder();
    }
    //To find all orders
    findAllOrder() {
        axios.get("http://localhost:9000/api/viewallorders")
            .then(response => response.data)
            .then((data) => {
                console.log(data);
                this.setState({ orders: data });
            });
    };

 ;

        
    //Pagination code
    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        let productsLength = this.state.products.length;
        if (this.state.currentPage < Math.ceil(productsLength / this.state.ordersPerPage)) {
            this.setState({
                currentPage: Math.ceil(productsLength / this.state.ordersPerPage)
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.products.length / this.state.ordersPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };



       //Deleting an order based on ID
    deleteOrder = (orderId) => {
        axios.delete("http://localhost:9000/api/deleteorders/" + orderId)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    // alert("Order Deleted Succesfully!!");
                    this.setState({
                        orders: this.state.orders.filter(order => order.orderId != orderId)
                    });
                }
                else {
                    this.setState({ "show": false });
                }

            });
    };
    //Find an order by ID
    findOrderById = (orderId) => {
        axios.get("http://localhost:9000/api/vieworder/" + orderId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        orderId: response.data.orderId,
                        orderStatus: response.data.orderStatus,
                        orderDate: response.data.orderDate,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        mobileNumber: response.data.mobileNumber,
                        email: response.data.email,
                        streetNo: response.data.address?.streetNo,
                        buildingName: response.data.address?.buildingName,
                        city: response.data.address?.city,
                        state: response.data.address?.state,
                        country: response.data.address?.country,
                        pincode: response.data.address?.pincode,
                    });
                }
            }).catch((error) => {
                console.error("Error - " + error);

            });

    }


    render() {
          
        const { orders, currentPage, ordersPerPage } = this.state;
        const lastIndex = currentPage * ordersPerPage;
        const firstIndex = lastIndex - ordersPerPage;
        const currentOrders = orders.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(orders.length / ordersPerPage);
        
        const pageNumCss = {
            width: "45px",
            // border: "1px",
            textAlign: "center",
            fontWeight: "bold"
        };


        return (
            <div class="container" >

                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <OrderToast show={this.state.show} message={"Order Deleted Successfully."} type={"danger"} />
                </div>

                <br />
                <Card className="border bg-light">
                    <Card.Body>
                        <h3><FontAwesomeIcon icon={faList} /> List of Orders</h3>
                        <br />
                        <div className="table-responsive ">
                            <Table bordered hover striped className="table" >
                                <thead className="bg-primary text-dark text-center">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Order Status</th>
                                        <th>Order Date</th>
                                        <th>Customer details</th>
                                        <th>Products</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        orders.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="9">No Orders Available.</td>
                                            </tr> :
                                            currentOrders.map((order, index) => (
                                                <tr key={order.orderId}>
                                                    <td className="text-center align-middle">{order.orderId}</td>
                                                    <td className="align-middle">{order.orderStatus}</td>
                                                    <td className="align-middle">{order.orderDate}</td>
                                                    <td className="align-middle">
                                                        {order.customer?.firstName}
                                                        {" "}
                                                        {order.customer?.lastName}
                                                        <br />
                                                        {order.customer?.email}
                                                        <br />
                                                        {order.customer?.mobileNumber}
                                                        <br />

                                                    </td>
                                                    <td className="align-middle">{order.cartItem?.productName}{""}
                                                        {order.cartItem?.quantity}{""}
                                                        {order.cartItem?.price}{""}
                                                    </td>

                                                    <td className="text-center align-middle">
                                                        <ButtonGroup>
                                                            //Editing an order
                                                            <Link to={"editorder/" + order.orderId} className="btn btn-md btn-outline-primary mr-2 rounded-0">
                                                                <FontAwesomeIcon icon={faEdit} />
                                                            </Link>{' '}
                                                            //Deleteing an order
                                                            <Button size="md" variant="outline-danger rounded-0" onClick={this.deleteOrder.bind(this, order.orderId)}>
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
                  
                    {orders.length > 0 ?
                        <Card.Footer>
                            <div style={{ "float": "left" }}>
                                Showing Page {currentPage} of {totalPages}
                            </div>
                            <div style={{ "float": "right" }}>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                            onClick={this.firstPage}>
                                            <FontAwesomeIcon icon={faFastBackward} /> First
                                            </Button>
                                        <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                            onClick={this.prevPage}>
                                            <FontAwesomeIcon icon={faStepBackward} /> Prev
                                            </Button>
                                    </InputGroup.Prepend>
                                    <FormControl className={"pageNumCss "} style={pageNumCss} name="currentPage" value={currentPage}
                                        onChange={this.changePage} />
                                    <InputGroup.Append>
                                        <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.nextPage}>
                                            <FontAwesomeIcon icon={faStepForward} /> Next
                                            </Button>
                                        <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.lastPage}>
                                            <FontAwesomeIcon icon={faFastForward} /> Last
                                            </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Card.Footer> : null
                    }
                </Card>

                <br />
                <br />
                <br />

            </div>
        );
    }


}

export default OrderList;
//Code ends here
