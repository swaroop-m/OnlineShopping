import React, { Component, useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Row ,Form} from 'react-bootstrap'
import Order from './Order'
import ThankYou from './ThankYou'
import { useHistory } from 'react-router';
import axios from 'axios';
//Author:Aishwarya A S
//Code Starts here
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
        let history=useHistory();
      function continueBrowsing(){
          history.push("/Home");
      }
     
        const cartItems= useSelector(state=>state.cart.cart);
        console.log(cartItems);

        

    return (
         <div className="container">
             <ThankYou></ThankYou>
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
                    {cartItems.map((data,index)=>
                    <tr key={index}>
                        <td className="table-data">
                            <div className="cart-info"> 
                                    <img src={data.pictureUrl}/>
                                    <div>
                                        <p>Product: {data.productName} </p>
                                        <p>Price: ₹ {data.price}</p>
                                        <p>Quantity:{data.cartQuantity}</p>
                                    </div>
                            </div>
                         </td>
                        <td>₹{data.price * data.cartQuantity}</td>
                    </tr>
                    )}
                    </Col> 
                    
                </Row>
                <Button onClick={continueBrowsing}>Continue browsing</Button>
                
            </div>

          );
    }
    

export default OrderSummary;
//Code ends here
