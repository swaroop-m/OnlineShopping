import React, { Component } from 'react';
import { Card, Table,  ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import OrderToast from './OrderToast'
import { connect } from 'react-redux';
import axios from 'axios';

class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: [],
            //pagination code begins
            currentPage : 1,
            orderPerPage : 5
            //pagination code ends
        };
    }

    componentDidMount() {
       this.findAllOrder();
    }
    findAllOrder(){
        axios.get("http://localhost:9000/api/viewallorders")
        .then(response => response.data)
        .then((data) => {
            this.setState({ order: data });
        });
    };
    deleteOrder = (orderId) => {
        
        axios.delete("http://localhost:9000/api/deleteorders/" + orderId)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    
                    this.setState({
                        order: this.state.order.filter(order => order.orderId !== orderId)
                    });
                } else {
                    this.setState({ "show": false });
                }
            });
    };

    //Methods used to implement pagination
    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.order.length / this.state.orderPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.order.length / this.state.orderPerPage)
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.order.length / this.state.orderPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };

    
    render() {
        //pagination code begins
        const {order, currentPage, orderPerPage} = this.state;
        const lastIndex = currentPage * orderPerPage;
        const firstIndex = lastIndex - orderPerPage;
        const currentOrder = order.slice(firstIndex, lastIndex);
        const totalPages = order.length / orderPerPage;

        const pageNumCss = {
            width: "45px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold"
        };


        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <OrderToast  show={this.state.show} message= {"Order Deleted Successfully."} type={"danger"} />
                </div>

                <Card className={"border border-dark bg-info text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faUsers} /> Order List
                </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="light">
                            <thead>
                                <tr>
                                   
                                    <th>Order ID</th>
                                    <th>Order Status</th>
                                    <th>Order Date</th>
                                    <th>Customer details</th>
                                    <th>Products</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    order.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6">No Orders available!</td>

                                        </tr> :
                                        // this.state.customer.map((customer) => (
                                            currentOrder.map((order) => (
                                            <tr className="col-3" key={order.orderId}>
                                                <td>
                                                    {order.orderId}
                                                </td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.customer?.firstName}
                                                    {" "}
                                                    {order.customer?.lastName}
                                                    {" "}
                                                    {order.customer?.email}
                                                    {" "}
                                                    {order.customer?.mobileNumber}
                                                    {" "}
                                                     </td>
                                                <td>{order.cartItem}</td>

                        

                                                <td>
                                                    <ButtonGroup>
                                                    <Link to={"editorder/"+order.orderId} className="btn btn-sm btn-outline-success"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                       
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteOrder.bind(this, order.orderId)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </ButtonGroup>

                                                </td>

                                            </tr>
                                        ))
                                }
                            </tbody>

                        </Table>
                    </Card.Body>
                    {/*Pagination code begins here */}
                    <Card.Footer>
                        <div style={{"float":"left"}}>
                                Showing Page {currentPage} of {totalPages}
                        </div>
                        <div style={{"float":"right"}}>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <Button type="button" variant="outline-light" disabled={currentPage === 1 ? true : false}
                                            onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faFastBackward} /> First
                                        </Button>
                                        <Button type="button" variant="outline-light" disabled={currentPage === 1 ? true : false}
                                            onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faStepBackward} /> Prev
                                        </Button>
                                    </InputGroup.Prepend>
                                    <FormControl style={pageNumCss} className={"bg-info"} name="currentPage" value={currentPage}
                                        onChange={this.changePage}/>
                                    <InputGroup.Append>
                                        <Button type="button" variant="outline-light" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.nextPage}>
                                        <FontAwesomeIcon icon={faStepForward} /> Next
                                        </Button>
                                        <Button type="button" variant="outline-light" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.lastPage}>
                                        <FontAwesomeIcon icon={faFastForward} /> Last
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                        </div>
                    </Card.Footer>

                </Card>

                <br />
                <br />
                <br />

            </div>
        );
    }


}

export default OrderList;
