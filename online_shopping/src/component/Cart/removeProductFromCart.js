import React from 'react'
import { useSelector } from 'react-redux'
import { Button} from 'react-bootstrap'
import './cart.css'

//contains remove item button
function RemoveProductFromCart(props) {
    
    const cartItems= useSelector(state=>state.cart)

    // removeFromcart = (cartItems) => {
    //     this.props.dispatch({type:'REMOVE_PRODUCT_FROM_CART',payload:productName})
    //  }

    return (
        <>
            <Button className="btn btn-danger" >Remove</Button>
            {/* onClick={() => this.removeFromcart(cartItems)} */}
        </>
    )
}

export default RemoveProductFromCart