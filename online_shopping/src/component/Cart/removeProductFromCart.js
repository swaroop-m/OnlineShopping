import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button} from 'react-bootstrap'
import './cart.css'

//contains remove item button
function RemoveProductFromCart(props) {
    
    const cartItems= useSelector(state=>state.cart.cart)
    const dispatch = useDispatch();


    const removeFromcart = (cartItems) => {
        dispatch({type:'REMOVE_PRODUCT'})
     }

    return (
        <>
            <Button className="btn btn-danger"onClick={() => removeFromcart(cartItems)}>Remove</Button>
            {/* onClick={(cartItem)=>dispatch({type:"REMOVE_PRODUCTS"})} */}
           
        </>
    )
}

export default RemoveProductFromCart