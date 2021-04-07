import React from 'react'
import { Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './cart.css'
import Cartpricedetails from './CartPriceDetails'
import Addtocart from './AddToCart'


//contains-> header , clear cart , display text 'cart is empty'
function CartUi(props) {

    const cartItems= useSelector(state=>state.cart)

//not working 
        let clearCart =() =>
        {
            // cartItems([])
            console.log("clearing all items")
        }
        
    return (
        
        <div className="small-container cart-page">
            
            <h2><AiOutlineShoppingCart size="1.5em"/>My Cart ({cartItems.length})</h2>  

            <div className="myButton">
                <Button variant="outline-dark" onClick={clearCart}>Clear Cart</Button>
            </div>

            <Addtocart/>

            <div>
                {cartItems.length === 0 && 
                    <div className=" bg-light d-flex justify-content-center align-items-center">
                        <p>Your cart is currently empty</p> 
                        
                    </div>}
                    <br/>
                    <p>Continue Browsing <Link to="Home">Here!</Link></p>
            </div>

            <Cartpricedetails/>
     
        </div> 
    )
}


export default CartUi