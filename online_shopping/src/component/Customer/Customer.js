import React, {Component} from 'react';
import {Card, Form, Col, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faSave, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import axios from 'axios';

export default class Customer extends Component{

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.customerChange=this.customerChange.bind(this);
        this.submitCustomer=this.submitCustomer.bind(this);

    }

    initialState = {
        customerId:'', firstName:'', lastName:'', mobileNumber:'', email:'', streetNo:'', buildingName:'', city:'', state:'', country:'', pincode:''

    };

    componentDidMount() {
        const customerId = +this.props.match.params.customerId;
        if(customerId) {
            this.findCustomerById(customerId);
        }
    }

    findCustomerById = (customerId) => {
        axios.get("http://localhost:9000/api/viewcustomer/"+customerId)
            .then(response => {
                if(response.data != null) {
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
            }).catch((error) => {
                console.error("Error - "+error);

            });
    }



    submitCustomer = event => {
        //alert('First Name: '+this.state.firstName+', Last Name: '+this.state.lastName+', Mobile No.: '+this.state.mobileNumber+', Email Id: '+this.state.email+', Street No.: '+this.state.streetNo+', Building Name: '+this.state.buildingName+', City: '+this.state.city+', State: '+this.state.state+', Country: '+this.state.country+', Pin Code.: '+this.state.pincode);
        event.preventDefault();

        const customer = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            mobileNumber: this.state.mobileNumber, 
            email: this.state.email, 
            address:{
                streetNo: this.state.streetNo, 
                buildingName: this.state.buildingName, 
                city: this.state.city, 
                state: this.state.state, 
                country: this.state.country, 
                pincode: this.state.pincode
            }
        };


        axios.post("http://localhost:9000/api/addcustomer", customer)
        .then(response => {
            console.log(response);
            if(response.data != null){
                this.setState({"show":true, "method":"post"});
                //alert("Customer Saved Successfully"); 
                setTimeout(() => {
                    this.setState({"show":false});
                    this.setState(this.initialState);
                } , 3000);
                               
            } else {
                this.setState({"show":false});
            }
            
        }).catch(err => {
            console.log("error");
            console.error(err);
        }); 

        
    };


    updateCustomer = event => {
        event.preventDefault();

        const customer = {
            customerId: this.state.customerId,
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            mobileNumber: this.state.mobileNumber, 
            email: this.state.email, 
            address:{
                streetNo: this.state.streetNo, 
                buildingName: this.state.buildingName, 
                city: this.state.city, 
                state: this.state.state, 
                country: this.state.country, 
                pincode: this.state.pincode
            }
        };


        axios.put("http://localhost:9000/api/updatecustomer", customer)
        .then(response => {
            console.log(response);
            if(response.data != null){
                this.setState({"show":true, "method":"put"});
                //alert("Customer Saved Successfully"); 
                setTimeout(() => {
                    this.setState({"show":false});
                    this.setState(this.initialState);
                    this.customerList();
                } , 3000);
                               
            } else {
                this.setState({"show":false});
            }
            
        }).catch(err => {
            console.log("error");
            console.error(err);
        }); 
        
    

    };



    resetCustomer = () => {
        this.setState(() => this.initialState);
    };


    customerChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })

    };

    customerList = () => {
        return this.props.history.push("/listcustomers");
    };


    render() {
        const {firstName, lastName, mobileNumber, email, streetNo, buildingName, city, country, pincode} =this.state;


        return (
            <div>

                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast show={this.state.show} message={this.state.method === "put" ? "Customer Updated Successfully." : "Customer Saved Successfully."} type={"success"}/>
                </div>

                <Card className={"border border-dark bg-info text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.customerId ? faEdit : faPlusSquare} /> {this.state.customerId ? "Update Customer" : "Add Customer"} 
        </Card.Header>
                    <Form onReset={this.resetCustomer} onSubmit={this.state.customerId ? this.updateCustomer : this.submitCustomer} id="customerFormId">
                        <Card.Body>
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
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmailId">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="email"
                                        value={email} onChange={this.customerChange}
                                        placeholder="Enter the Email Id" />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridStreetNumber">
                                    <Form.Label>Street Number</Form.Label>
                                    <Form.Control autoComplete="nope"
                                        type="test" name="streetNo"
                                        value={streetNo} onChange={this.customerChange}
                                        placeholder="Enter Street No" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuildingName">
                                    <Form.Label>Building Name</Form.Label>
                                    <Form.Control autoComplete="nope"
                                        type="test" name="buildingName"
                                        value={buildingName} onChange={this.customerChange}
                                        placeholder="Enter Building Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control autoComplete="nope"
                                        type="test" name="city"
                                        value={city} onChange={this.customerChange}
                                        placeholder="Enter City" />
                                </Form.Group>
                            </Form.Row>



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
                                    <Form.Control autoComplete="nope"
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

                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button size="sm" variant="success" type="submit" >
                                <FontAwesomeIcon icon={faSave} /> {this.state.customerId ? "Update" : "Submit"} 
                            </Button>{' '}

                            <Button size="sm" variant="secondary" type="reset" >
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}

                            <Button size="sm" variant="warning" type="button" onClick={this.customerList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Customer List
                            </Button>
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


