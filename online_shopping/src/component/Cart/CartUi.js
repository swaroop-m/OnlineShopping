//author: Sajan Kamath V
//code Starts here
import React from 'react';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import AddToCart from './AddToCart';
import CartPriceDetails from './CartPriceDetails';
import './cart.css';

//contains-> header 
//clear cart button-> onclick removes all product from the cart ,
//if cart===null -> display text 'cart is empty'
function CartUi(props) {

    const cartItems= useSelector(state=>state.cart.cart)
    const dispatch = useDispatch();

    const clearCart=(product)=>{
    dispatch({ type: "CLEAR_CART"});
}
        
    return (
        <>
        
        <div className="container cart-page">
            
            <h2><AiOutlineShoppingCart size="1.5em"/>My Cart ({cartItems.length})</h2>   
            
            <div className="my-Button">
                <Button variant="outline-dark" onClick={clearCart}  >Clear Cart</Button>
            </div>

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
        </>
    )
}


export default CartUi

//code ends here