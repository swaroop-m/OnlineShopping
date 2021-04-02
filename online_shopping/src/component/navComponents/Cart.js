import React, { Component, useState } from 'react'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract} from 'react-icons/gr'
import { Button, Col, Row } from 'react-bootstrap'

import {RiCustomerService2Line} from 'react-icons/ri'
// import ContactUs from './ContactUs'

function Cart(props) {
    let [initialValue,setInitialValue] = useState(1);

        let addQuantity =() =>{
            setInitialValue(initialValue+1)
        }

        let substractQuantity =() =>{
            setInitialValue(initialValue-1)
        }

        let buttonClick= () => {
            console.log("Placed Order", new Date())
        }
    

    return (
         // <div className="container">
            //     <Row>
            //     </Row>
            // </div>

            <div className="container">
                <Row>
                    <Col >
                        <h1><AiOutlineShoppingCart size="1.5em"/>My Cart (total items)</h1>
                    </Col>
                     <Col xs lg="2">
                        <Button variant="dark" >Clear Cart</Button> 
                    </Col>
                    {/* <Button variant="light"><RiCustomerService2Line/></Button></h1> */}
                    
                </Row>
                <hr/>

                <Row>
                    <Col md="auto">
                        <div > 
                            <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" width="180px" height="200px" alt="/" className=""/>
                        </div>
                    </Col>
                    
                    <Col>
                        <div className="item-desc">
                        <span className="title">ProuctName: </span>
                        <p>Product Description : </p>
                        <p><b>Price: ₹</b></p> 
                        <p><b>Quantity: {initialValue} </b></p>
                
                        <div className="add-remove">
                            <Button  variant="Secondary" onClick={addQuantity}><VscAdd/></Button>  <Button variant="light" onClick={substractQuantity}><GrSubtract/></Button>  <Button variant="outline-danger">Remove</Button>
                            </div>
                            
                                
                            </div>
                    </Col>
                </Row>
                <hr/>
                
                        <div>
                        <h3>Total Price = ₹(add price of all the products)</h3>
                        <hr/>
                            <Row>
                                <Col xs lg="2">  <Button className="btn btn-primary" onClick={buttonClick}> Place Order</Button></Col>
                            </Row>
                            
                           
                               
                            <hr/>
                        </div>

            </div>  
         );
    }

export default Cart;