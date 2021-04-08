import React from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './cart.css'

import AddToCart from './AddToCart'
import  CartPriceDetails from './CartPriceDetails'

import RemoveAllProducts from './removeAllProducts'



//contains-> header , clear cart , display text 'cart is empty'
function CartUi(props) {

    const cartItems= useSelector(state=>state.cart)
        
    return (
        <>
        
        <div className="small-container cart-page">
            
            <h2><AiOutlineShoppingCart size="1.5em"/>My Cart ({cartItems.length})</h2>  

            <RemoveAllProducts/>

            <AddToCart/>

            <div>
                {cartItems.length === 0 && 
                    <div className=" bg-light d-flex justify-content-center align-items-center">
                        <p>Your cart is currently empty</p> 
                    </div>}
                    <br/>
                    <p>Continue Browsing <Link to="Home">Here!</Link></p>
            </div>

            <CartPriceDetails/>
     
        </div> 
        {/* <Viewallproducts/> */}
        </>
    )
}


export default CartUi