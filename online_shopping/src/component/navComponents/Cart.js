import React, { Component } from 'react'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract, GrSubtractCircle} from 'react-icons/gr'
import { Button } from 'react-bootstrap';

class Cart extends Component {
    render() {
        return (
            <div>
                <h1><AiOutlineShoppingCart size="1.5em"/>My Cart (total items)---------------------(Clear my cart) </h1>
                <hr/>
                <p> Image-------------------------Product Description
                    <br/>
                    <br/>
                <Button  variant="Secondary"><VscAdd/></Button>( total quantity )<Button variant="light"><GrSubtract/></Button>
                <br/>
       <br/>
                <button className="btn btn-danger">Remove</button>
                </p>

                <hr/>
                <h1>Total Price = (add price of all the products)</h1>

                <hr/>
                <Button className="btn btn-primary"> Place Order</Button>
                <hr/>
                
            </div>
        );
    }
}

export default Cart;