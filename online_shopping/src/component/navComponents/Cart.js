import React, { Component, useState } from 'react'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {GrSubtract} from 'react-icons/gr'
import { Button, Col, Row, Dropdown, DropdownButton } from 'react-bootstrap'

function Cart(props) {
    let [initialValue,setInitialValue] = useState(1);

        let addQuantity =() =>{
            setInitialValue(initialValue+1)
        }

        let substractQuantity =() =>{
            setInitialValue(initialValue-1)
        }

        let removeButton =() =>{
            console.log("remove the product from cart")
        }

        let buttonClick= () => {
            console.log("Placed Order", new Date())
        }

        // let onSelectOption =() =>{
        //     console.log("Selected option :")
        // }
    

    return (
         <div className="container">
             
                <Row md={4} border-radius= "5%">
                    <Col xs={12} md={8}> <h1><AiOutlineShoppingCart size="1.5em"/>My Cart</h1>
                    <hr/>
                        <div>
                            <Row>
                                <Col>
                                <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" width="180px" height="200px" alt="/" className=""/> <br/><br/>
                                <Button  variant="Secondary mr-5" size="lg" onClick={addQuantity}><VscAdd/></Button><Button variant="light" size="lg" onClick={substractQuantity}><GrSubtract/></Button>
                                </Col>
                                <Col>
                                    <p className="title">ProuctName: Iphone</p>
                                     <p>Product Description : Product By Apple</p>
                                    <p><b>Price: ₹15000</b></p> 
                                     <p><b>Quantity: {initialValue} </b></p>
                                     <Button variant="outline-danger">Remove</Button>
                                </Col> 
                            </Row>
                            <hr/>
                            <Col md={{ span: 6, offset: 10 }}><Button variant="dark">Clear Cart</Button> </Col>
                        </div>
                    </Col>
                    <span class="border-left border-dark">
                    <Col ><h2>Price details</h2>
                    <hr/>
                        <div>
                            <p>Shipping : ₹60 </p>
                            <p>Delivery : ₹30 </p>
                            <select>
                                <option >--Mode of payment--</option>
                                <option>Cash on delivery</option>
                            </select>
                        </div>
                    <hr/>
                        <h4>Total Price: 15060₹ (product + shipping+ delivery)</h4>
                    <hr/>
                        <Col  md={{offset: 1}}>
                            <Button className="btn btn-success" onClick={buttonClick}> Place Order</Button>
                        </Col>
                    <br/>
                        <p><AiFillSafetyCertificate/>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                    </Col> 
                    </span>
                </Row>
            </div>
          );
    }

export default Cart;