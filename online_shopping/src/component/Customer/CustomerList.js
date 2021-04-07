import React, { Component } from 'react';
import { Card, Table, Image, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import MyToast from './MyToast';
import axios from 'axios';


export default class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            //pagination code begins
            currentPage : 1,
            customerPerPage : 5
            //pagination code ends
        };
    }

    componentDidMount() {
        this.findAllCustomer();
    }

    findAllCustomer() {

        axios.get("http://localhost:9000/api/viewallcustomers")
            .then(response => response.data)
            .then((data) => {
                this.setState({ customer: data });
            });
    };

    deleteCustomer = (customerId) => {
        //alert(customerId);
        axios.delete("http://localhost:9000/api/deletecustomer/" + customerId)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    //alert("Customer with Id: "+customerId +" is deleted successfully." );
                    this.setState({
                        customer: this.state.customer.filter(customer => customer.customerId !== customerId)
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
        if(this.state.currentPage < Math.ceil(this.state.customer.length / this.state.customerPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.customer.length / this.state.customerPerPage)
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.customer.length / this.state.customerPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };


    render() {
        //pagination code begins
        const {customer, currentPage, customerPerPage} = this.state;
        const lastIndex = currentPage * customerPerPage;
        const firstIndex = lastIndex - customerPerPage;
        const currentCustomer = customer.slice(firstIndex, lastIndex);
        const totalPages = customer.length / customerPerPage;

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
                    <MyToast  show={this.state.show} message= {"Customer Deleted Successfully."} type={"danger"} />
                </div>

                <Card className={"border border-dark bg-info text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faUsers} /> Customer List
                </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="light">
                            <thead>
                                <tr>
                                    {/*<th>#</th>*/}
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile Number</th>
                                    <th>Email Id</th>
                                    <th>Address</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // this.state.customer.length === 0 ?
                                    customer.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6">No Customers available!</td>

                                        </tr> :
                                        // this.state.customer.map((customer) => (
                                            currentCustomer.map((customer) => (
                                            <tr className="col-3" key={customer.customerId}>
                                                <td>
                                                    <Image src={"https://webstockreview.net/images/clipart-woman-cellphone-19.png"} roundedCircle width="25" height="25" />
                                                    {customer.firstName}
                                                </td>
                                                <td>{customer.lastName}</td>
                                                <td>{customer.mobileNumber}</td>
                                                <td>{customer.email}</td>

                                                <td>{customer.address?.streetNo}
                                                    {" "}
                                                    {customer.address?.buildingName}
                                                    {" "}
                                                    {customer.address?.city}
                                                    {" "}
                                                    {customer.address?.state}
                                                    {" "}
                                                    {customer.address?.country}
                                                    {" "}
                                                    {customer.address?.pincode}  </td>

                                                <td>
                                                    <ButtonGroup>
                                                    <Link to={"editcustomer/"+customer.customerId} className="btn btn-sm btn-outline-success"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                        {/* <Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faEdit} /></Button> */}
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteCustomer.bind(this, customer.customerId)}><FontAwesomeIcon icon={faTrash} /></Button>
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
