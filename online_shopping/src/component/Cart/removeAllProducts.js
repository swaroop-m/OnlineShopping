import React from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import './cart.css'

//contains Clear cart button
function RemoveAllProducts(props) {
   
    const cartItems= useSelector((state)=>state.cart)

    const dispatch = useDispatch();

        
      
    return (
       
        <>
            <div className="myButton">
                <Button variant="outline-dark"  onClick={()=>dispatch({type:"CLEAR_CART"})}>Clear Cart</Button>
            </div>
        </>
    )
}


export default RemoveAllProducts