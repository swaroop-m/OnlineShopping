import React from 'react'
import { useSelector } from 'react-redux'
import { Button} from 'react-bootstrap'
import './cart.css'

//contains Clear cart button
function RemoveAllProducts(props) {
   
    const cartItems= useSelector(state=>state.cart)

        //not working 
        let clearCart =() =>
        {
            // cartItems([])
            console.log("clearing all items")
        }

    return (
        <>
            <div className="myButton">
                <Button variant="outline-dark" onClick={clearCart}>Clear Cart</Button>
            </div>
        </>
    )
}


export default RemoveAllProducts