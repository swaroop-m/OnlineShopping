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

        let buttonClick= () => {
            console.log("Placed Order", new Date())
        }
    

    return (
         <div className="container">
                <Row md={4} border-radius= "5%">
                    <Col xs={12} md={8}> <h1><AiOutlineShoppingCart size="1.5em"/>My Cart</h1>
                    <hr/>
                        <div>
                            <Row>
                                <Col>
                                <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" width="180px" height="200px" alt="/" className=""/> <br/><br/>
                                <Button  variant="Secondary" onClick={addQuantity}><VscAdd/></Button>  <Button variant="light" onClick={substractQuantity}><GrSubtract/></Button>
                                
                                </Col>
                                <Col>
                                    <span className="title">ProuctName: Iphone</span>
                                     <p>Product Description : Product By Apple</p>
                                    <p><b>Price:15000 ₹</b></p> 
                                     <p><b>Quantity: {initialValue} </b></p>
                                     <Button variant="outline-danger">Remove</Button>
                                </Col> 
                            </Row>
                            <hr/>
                            <Col md={{ span: 6, offset: 10 }}><Button variant="dark">Clear Cart</Button> </Col>
                        </div>
                    </Col>
                    <Col ><h2>Price details</h2>
                    <hr/>
                        <div>
                            <p>Shipping :60 ₹</p>
                            <select>
                                <option>--Mode of payment--</option>
                                <option>Cash on delivery</option>
                                <option>Coming soon!</option>
                            </select>
                        </div>
                    <hr/>
                        <h4>Total Price: 15060₹</h4>
                        <hr/>
                        <Col  md={{offset: 1}}>
                        <Button className="btn btn-primary" onClick={buttonClick}> Place Order</Button>
                        </Col>
                        <br/>
                        <p><AiFillSafetyCertificate/>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                    </Col> 
                </Row>
            </div>

        //     <div className="container">
        //         <Row>
        //             <Col >
        //                 <h1><AiOutlineShoppingCart size="1.5em"/>My Cart (total items)</h1>
        //             </Col>
        //              <Col xs lg="2">
        //                 <Button variant="dark" >Clear Cart</Button> 
        //             </Col>
        //             {/* <Button variant="light"><RiCustomerService2Line/></Button></h1> */}
                    
        //         </Row>
        //         <hr/>

        //         <Row>
        //             <Col md="auto">
        //                 <div > 
        //                     <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" width="180px" height="200px" alt="/" className=""/>
        //                 </div>
        //             </Col>
                    
        //             <Col>
        //                 <div className="item-desc">
        //                 <span className="title">ProuctName: </span>
        //                 <p>Product Description : </p>
        //                 <p><b>Price: ₹</b></p> 
        //                 <p><b>Quantity: {initialValue} </b></p>
                
        //                 <div className="add-remove">
        //                     <Button  variant="Secondary" onClick={addQuantity}><VscAdd/></Button>  <Button variant="light" onClick={substractQuantity}><GrSubtract/></Button>  <Button variant="outline-danger">Remove</Button>
        //                     </div>
                            
                                
        //                     </div>
        //             </Col>
        //         </Row>
        //         <hr/>
                
        //                 <div>
        //                 <h3>Total Price = ₹(add price of all the products)</h3>
        //                 <hr/>
        //                     <Row>
        //                         <Col xs lg="2">  <Button className="btn btn-primary" onClick={buttonClick}> Place Order</Button></Col>
        //                     </Row>
                            
                           
                               
        //                     <hr/>
        //                 </div>

        //     </div>  
          );
    }

export default Cart;