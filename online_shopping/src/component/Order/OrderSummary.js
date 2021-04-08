import React, { Component, useState } from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import Order from './Order'

function OrderSummary(props) {
         

        let cancelButton =() =>{
            console.log("Cancel Order")
        }

        let buttonClick= () => {
            console.log("Order Placed", new Date())
        }
      
        
    

    return (
         <div className="container">
             
                <Row md={2} border-radius= "5%">
                    <Col xs={7} md={6}> <h1>Order Summary</h1>
                    <hr/>
                        <div>
                            <Row>
                               
                                <Col>
                                    <p className="title"><b>Customer Details</b></p>
                                     <p>
                                     Aishwarya A S</p>
                                     <p>986628822</p>
                                     <p>No.10,Payappa Garden,Bangalore-560051</p>
                                     <p><b>Order Date:</b>12.2.2021</p>
                                     <p><b>Order Status:</b> Confirmed</p><br/>
                                    
                                     <div className="top-element-formatting">
                                     <input type="checkbox"></input>{" "}
                                            <span className="second-word-formatting"><label><i>Delivery Address is same as Billing Address</i></label></span>
                                      </div>                                        
                                </Col> 
                            </Row>
                            <hr/>
                            <Col  md={{offset: 8}}>
                            <Button className="btn btn-danger" onClick={buttonClick}> Cancel Order</Button>
                        </Col>
                            <Col md={{ span: 8, offset:8 }}> </Col>
                        </div>
                    </Col>
                 
                    <Col >
                    <br/><br/><br/>
                    <p><b>Product Details</b></p>
                    <p className="title">ProuctName: Iphone <b>Price:</b> ₹15000<b> Quantity:</b> 1 </p>
                                     <hr/>
                                     <p className="title">ProuctName: Iphone <b>Price:</b> ₹15000<b> Quantity:</b> 1 </p>
                        <div>
                          <hr/>
                            <p>Order Total:₹ 30000</p>
                            <p>Mode of payment</p>
                        </div>
                    <hr/>
                        <h4>Total Price:₹ 15060</h4>
                    <hr/>
                        
                    <br/>
                
                    </Col> 
                    
                </Row>
            </div>
          );
    }

export default OrderSummary;
