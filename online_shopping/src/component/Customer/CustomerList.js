//CustomerList.js


// Author: Shrestha Chowdhury [JEEFSI_Uni41]
// Code starts here
import React, { Component } from 'react';
import { Card, Table, Image, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MyToast from './MyToast';
import axios from 'axios';


export default class CustomerList extends Component {

    //Constructor to initialise the state variable
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            //Pagination code begins. Initialising the current page and customer per page values.
            currentPage: 1,
            customerPerPage: 5
            //pagination code ends
        };
    }

    //component life cycle method immediately invoked after the component is mounted
    componentDidMount() {
        this.findAllCustomer();
    }

    //Method to get the details of all the customers using axios
    findAllCustomer() {

        axios.get("http://localhost:9000/api/viewallcustomers")
            .then(response => response.data)
            .then((data) => {
                this.setState({ customer: data });
            });
    };

    //Method to delete the details of the customer by id using axios
    deleteCustomer = (customerId) => {

        axios.delete("http://localhost:9000/api/deletecustomer/" + customerId)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);

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
        if (this.state.currentPage < Math.ceil(this.state.customer.length / this.state.customerPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.customer.length / this.state.customerPerPage)
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.customer.length / this.state.customerPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };


    render() {
        //pagination code begins
        //constants created for the different variables used for pagination
        const { customer, currentPage, customerPerPage } = this.state;
        const lastIndex = currentPage * customerPerPage; //multiplying current page with customers per page to get the last index
        const firstIndex = lastIndex - customerPerPage; //first index  is given by subtracting customers per page from the last index
        const currentCustomer = customer.slice(firstIndex, lastIndex); //current customers are got by slicing
        const totalPages = customer.length / customerPerPage; //total customers are got by dividing total customers with total pages

        //Styling the pagination components
        const pageNumCss = {
            width: "45px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold"
        };


        return (
            <div>
                {/* Toast message appears to show that the customer is deleted */}
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={"Customer Deleted Successfully."} type={"danger"} />
                </div>

                {/* Card created for the customer list */}
                <Card className={"border border-dark bg-info text-white container"}>
                    <Card.Header><h2><FontAwesomeIcon icon={faUsers} /> Customer List</h2>
                    </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="light">
                            {/* Headings for the customer list columns */}
                            <thead>
                                <tr>

                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile Number</th>
                                    <th>Email Id</th>
                                    <th>Address</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // If the number of customers is 0 in the database then show that there are no customers available
                                    customer.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6">No Customers available!</td>

                                        </tr> :

                                        // Map function to loop through the customer array and get the customer details
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
                                                    {/* Buttons added for edit and delete operations on the customer list */}
                                                    <ButtonGroup>
                                                        <Link to={"editcustomer/" + customer.customerId} className="btn btn-sm btn-outline-success"><FontAwesomeIcon icon={faEdit} /></Link>{' '}

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
                        <div style={{ "float": "left" }}>
                            Showing Page {currentPage} of {totalPages}
                        </div>
                        {/* Creating a separate div component to place the buttons for the pagination related tasks */}
                        <div style={{ "float": "right" }}>
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
                                    onChange={this.changePage} />
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
// Author: Shrestha Chowdhury [JEEFSI_Uni41]
// Code ends here
