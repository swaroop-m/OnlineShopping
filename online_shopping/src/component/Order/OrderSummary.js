import React, { Component, useState,useEffect } from 'react'
import { Button, Card, Col, Row ,Form} from 'react-bootstrap'
import Order from './Order'

function OrderSummary(props) {
         
     var myCurrentDate = new Date();
     var date = myCurrentDate.getDate() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getFullYear();
    const newCurrentDate = date;

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
                                     <p><b>Order Date:</b>{newCurrentDate}</p>
                                     <p><b>Order Status:</b> Confirmed</p><br/>
                                    
                                     <div className="top-element-formatting">
                                     <input type="checkbox"></input>{" "}
                                            <span className="second-word-formatting"><label><i>Delivery Address is same as Billing Address</i></label></span>
                                      </div>                                        
                                </Col> 
                            </Row>
                            <hr/>
                           
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
