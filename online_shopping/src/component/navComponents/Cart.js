import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract, GrSubtractCircle} from 'react-icons/gr'
import { Button } from 'react-bootstrap';

class Cart extends Component {
    render() {
        return (
    //         <li className="collection-item avatar" >
    //         <div className="item-img"> 
    //            <img src="/" alt="/" className=""/>
    //         </div>
       
    //         <div className="item-desc">
    //             <span className="title">title</span>
    //             <p>desc</p>
    //             <p><b>Price: $</b></p> 
    //             <p>
    //                 <b>Quantity:</b> 
    //             </p>
    //             <div className="add-remove">
    //             <Button  variant="light"><Link to="/cart"><VscAdd/></Link></Button>
    //             <Button variant="light"><Link to="/cart"><GrSubtract/></Link></Button>
    //             </div>
    //             <button className="waves-effect waves-light btn pink remove">Remove</button>
    //         </div>
           
    //    </li>
            <div>
                <h1><AiOutlineShoppingCart size="1.5em"/>My Cart (total items)---------------------<Button variant="dark" >Clear Cart</Button> </h1>
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