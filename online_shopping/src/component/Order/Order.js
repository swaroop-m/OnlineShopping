import React, {Component,useState} from 'react';
import {Card, Form, Col, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faSave, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import OrderToast from './OrderToast';
import axios from 'axios';
// Author:Aishwarya A S
// Code Starts here
 class Order extends Component{
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.orderChange=this.orderChange.bind(this);
        this.submitOrder=this.submitOrder.bind(this);
    }
    //State of the variables
    initialState = {
        orderId:'',orderDate:'',orderStatus:'', firstName:'', lastName:'', mobileNumber:'', email:'', streetNo:'', buildingName:'', city:'', state:'', country:'', pincode:''

    };

    //called after the component is rendered
    componentDidMount() {
        const orderId = +this.props.match.params.orderId;
        if(orderId) {
            this.findOrderById(orderId);
        }
    }
    
    //Function to find an oder by ID
    findOrderById = (orderId) => {
        axios.get("http://localhost:9000/api/vieworder/"+orderId)
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        orderId: response.data.orderId,
                        orderDate:response.data.orderDate,
                        orderStatus: response.data.orderStatus,
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
   
     //OnClick event
    submitOrder = event => {
        event.preventDefault();

        const order = {
            orderDate: this.state.orderDate, 
            orderStatus: this.state.orderStatus, 
            customer:{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                mobileNumber:this.state.mobileNumber
            },

        };


        axios.post("http://localhost:9000/api/addorder", order)
        .then(response => {
            console.log(response);
            if(response.data != null){
                this.setState({"show":true, "method":"post"});
                
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

    //Updates an order
    updateOrder = event => {
        event.preventDefault();

        const order = {
            orderId: this.state.orderId,
            orderDate: this.state.orderDate, 
            orderStatus: this.state.orderStatus, 
            customer:{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                mobileNumber:this.state.mobileNumber
            },
           
        };


        axios.put("http://localhost:9000/api/updateorder", order)
        .then(response => {
            console.log(response);
            if(response.data != null){
            
                this.setState({"show":true, "method":"put"});
                //alert("Customer Saved Successfully"); 
                setTimeout(() => {
                    this.setState({"show":false});
                    this.setState(this.initialState);
                    this.orderList();
                } , 3000);
                               
            } else {
                this.setState({"show":false});
            }
            
        }).catch(err => {
            console.log("error");
            console.error(err);
        }); 
        
    

    };



    resetOrder = () => {
        this.setState(() => this.initialState);
    };


    orderChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })

    };
    
    //Declarative routing
    orderList = () => {
        return this.props.history.push("/listorder");
    };

    

    render() {
        const {orderDate,orderStatus,firstName, lastName, mobileNumber, email, streetNo, buildingName, city, country, pincode} =this.state;
       

        return (
            <div className="container">
                //Toast Message
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <OrderToast show={this.state.show} message={this.state.method === "put" ? "Order Updated Successfully." : "Order Saved Successfully."} type={"success"}/>
                </div>
                 
                <Card className={"border border-dark bg-info text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.orderId ? faEdit : faPlusSquare} /> {this.state.orderId ? "Update Order" : "Add Order"} 
        </Card.Header>
                    <Form onReset={this.resetOrder} onSubmit={this.state.orderId ? this.updateOrder : this.submitOrder} id="orderFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridOrderDate">
                                    <Form.Label>Order Date</Form.Label>
                                    <Form.Control required autoComplete="nope"
                                        type="test" name="orderDate"
                                        value={orderDate} onChange={this.orderChange}
                                        placeholder="Enter order date" disabled/>
                                </Form.Group>


                           
                                <Form.Group as={Col} controlId="formGridOrderStatus">
                                <Form.Label>Order Status</Form.Label>
                                <Form.Control required autoComplete="nope"
                                type="test" name="status"
                                value={this.state.status} 
                                onChange={this.orderChange}
                                 as="select" defaultValue="Order Status - Choose...">
                                    <option >Order - Choose...</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="On the way">On the way</option>
                                    <option value="Accepted">Accepted</option>
                                        
                                </Form.Control>
                            </Form.Group> 

                               
                            </Form.Row>


                        </Card.Body>

                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button size="sm" variant="success" type="submit" >
                                <FontAwesomeIcon icon={faSave} /> {this.state.orderId ? "Update" : "Submit"} 
                            </Button>{' '}

                            <Button size="sm" variant="secondary" type="reset" >
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}

                            <Button size="sm" variant="warning" type="button" onClick={this.orderList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Order List
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
export default Order;
//Code ends here
