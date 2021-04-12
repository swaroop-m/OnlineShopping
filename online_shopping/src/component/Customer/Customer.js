//Customer.js
//Updated with Validations


// Author: Shrestha Chowdhury [JEEFSI_Uni41]
// Code starts here
import React, { Component } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo, faEdit } from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import axios from 'axios';

export default class Customer extends Component {

    //Constructor to initialise the state variable
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.state.isValid = false;
        this.customerChange = this.customerChange.bind(this);
        this.submitCustomer = this.submitCustomer.bind(this);

    }

    //declaring the initial state values
    initialState = {
        customerId: '', firstName: '', lastName: '', mobileNumber: '', email: '', streetNo: '', buildingName: '', city: '', state: '', country: '', pincode: '',
        errors: {}

    };

    //component life cycle method immediately invoked after the component is mounted
    componentDidMount() {
        const customerId = +this.props.match.params.customerId;
        if (customerId) {
            this.findCustomerById(customerId);
        }
    }

    //Method to get the details of the customer by id using axios
    findCustomerById = (customerId) => {
        axios.get("http://localhost:9000/api/viewcustomer/" + customerId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        customerId: response.data.customerId,
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
                //If any error occurs while fetching the customer data from the database then catch the error and display on the console
            }).catch((error) => {
                console.error("Error - " + error);

            });
    };


    // Method to be called while clicking on the submit button to register the details of the customer
    submitCustomer = event => {
        //Prevent the default submission of the data
        event.preventDefault();
        //calling the validate method to check for validations
        if (this.validate()) {
            console.log(this.state);
            //declaring a customer variable 
            const customer = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mobileNumber: this.state.mobileNumber,
                email: this.state.email,
                address: {
                    streetNo: this.state.streetNo,
                    buildingName: this.state.buildingName,
                    city: this.state.city,
                    state: this.state.state,
                    country: this.state.country,
                    pincode: this.state.pincode
                }
            };

            //axios library used to make http requests to external sources. API call for adding the customer to the database
            axios.post("http://localhost:9000/api/addcustomer", customer)
                .then(response => {
                    console.log(response);
                    if (response.data != null) {
                        this.setState({ "show": true, "method": "post" });

                        setTimeout(() => {
                            this.setState({ "show": false });
                            this.setState(this.initialState);
                        }, 3000);

                    } else {
                        this.setState({ "show": false });
                    }
                    //Catching the error   
                }).catch(err => {
                    console.log("error");
                    console.error(err);
                });
        }

    };


    //Method for validation
    validate() {
        let errors = {};
        let isValid = true;
        //Checking for correct email Id
        if (typeof this.state.email !== "undefined") {

            var pattern = new RegExp(/^[A-Za-z0-9+_.-]+@(.+)$/i);
            if (!pattern.test(this.state.email)) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }
        //Checking for correct mobile number
        if (typeof this.state.mobileNumber !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(this.state.mobileNumber)) {
                isValid = false;
                errors["mobileNumber"] = "Please enter valid mobile number.";
            }

            else if (this.state.mobileNumber.length !== 10) {
                isValid = false;
                errors["mobileNumber"] = "Please enter a 10 digit mobile number.";
            }

        }


        this.setState({
            errors: errors
        });

        return isValid;
    }



    //Method to update the customer details
    updateCustomer = event => {
        //Prevent the default submission of the data
        event.preventDefault();
        //calling the validate method to check for validations
        if (this.validate()) {
            console.log(this.state);
            //declaring a customer variable 
            const customer = {
                customerId: this.state.customerId,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mobileNumber: this.state.mobileNumber,
                email: this.state.email,
                address: {
                    streetNo: this.state.streetNo,
                    buildingName: this.state.buildingName,
                    city: this.state.city,
                    state: this.state.state,
                    country: this.state.country,
                    pincode: this.state.pincode
                }
            };

            //API call for updating the customer details
            axios.put("http://localhost:9000/api/updatecustomer", customer)
                .then(response => {
                    console.log(response);
                    if (response.data != null) {
                        this.setState({ "show": true, "method": "put" });

                        setTimeout(() => {
                            this.setState({ "show": false });
                            this.setState(this.initialState);
                            this.customerList();
                        }, 3000);

                    } else {
                        this.setState({ "show": false });
                    }

                }).catch(err => {
                    console.log("error");
                    console.error(err);
                });

        }

    };


    //To reset the registration form to its initial state
    resetCustomer = () => {
        this.setState(() => this.initialState);
    };


    customerChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    //push all the data of the customers into the customer list
    customerList = () => {
        return this.props.history.push("/listcustomers");
    };


    render() {
        const { firstName, lastName, mobileNumber, email, streetNo, buildingName, city, country, pincode } = this.state;


        return (
            <div>

                {/* Showing the toast message on successful form submission or updation of customer details */}
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={this.state.method === "put" ? "Customer Updated Successfully." : "Customer Saved Successfully."} type={"success"} />
                </div>

                {/* Card to enclose the form elements */}
                <Card className={"border border-dark bg-info text-white container"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.customerId ? faEdit : faPlusSquare} /> {this.state.customerId ? "Update Customer" : "Add Customer"}
                    </Card.Header>
                    <Form
                        validated={this.state.isValid} onReset={this.resetCustomer} onSubmit={this.state.customerId ? this.updateCustomer : this.submitCustomer} id="customerFormId">
                        <Card.Body>
                            {/* Creating the form fields to enter the details into the form for registration */}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="firstName"
                                        value={firstName} onChange={this.customerChange}
                                        placeholder="Enter the First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control autoComplete="nope"
                                        type="test" name="lastName"
                                        value={lastName} onChange={this.customerChange}
                                        placeholder="Enter the Last Name" />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridMobileNumber">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="mobileNumber"
                                        value={mobileNumber} onChange={this.customerChange}
                                        placeholder="Enter the Mobile Number" />
                                    {/* Displaying the error message for validation */}
                                    <div className="text-warning">{this.state.errors.mobileNumber}</div>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmailId">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="email"
                                        value={email} onChange={this.customerChange}
                                        placeholder="Enter the Email Id" />
                                    {/* Displaying the error message for validation */}
                                    <div className="text-warning">{this.state.errors.email}</div>
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridStreetNumber">
                                    <Form.Label>Street Number</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="streetNo"
                                        value={streetNo} onChange={this.customerChange}
                                        placeholder="Enter Street No" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuildingName">
                                    <Form.Label>Building Name</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="buildingName"
                                        value={buildingName} onChange={this.customerChange}
                                        placeholder="Enter Building Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="city"
                                        value={city} onChange={this.customerChange}
                                        placeholder="Enter City" />
                                </Form.Group>
                            </Form.Row>


                            {/* Creating a dropdown menu to choose the desired state */}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State/Union Territory</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="state"
                                        value={this.state.state}
                                        onChange={this.customerChange}
                                        as="select" defaultValue="State - Choose...">
                                        <option >State - Choose...</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="country"
                                        value={country} onChange={this.customerChange}
                                        placeholder="Enter the Country" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPinCode">
                                    <Form.Label>Pin Code</Form.Label>
                                    <Form.Control autoComplete="nope"
                                        type="test" name="pincode"
                                        value={pincode} onChange={this.customerChange}
                                        placeholder="Enter the Pin Code" />
                                </Form.Group>
                            </Form.Row>


                        </Card.Body>

                        {/* Card footer that includes the submit, reset and update buttons */}
                        <Card.Footer style={{ "textAlign": "right" }}>
                            {/* Conditional check for displaying the submit and update button */}
                            <Button size="sm" variant="success" type="submit" >
                                <FontAwesomeIcon icon={faSave} /> {this.state.customerId ? "Update" : "Submit"}
                            </Button>{' '}

                            {/* Reset button */}
                            <Button size="sm" variant="secondary" type="reset" >
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}


                        </Card.Footer>
                    </Form>
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

