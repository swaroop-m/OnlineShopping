import React from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import './cart.css'

//contains Clear cart button
function RemoveAllProducts(props) {
   
    const cartItems= useSelector((state)=>state.cart.cart)

    const dispatch = useDispatch();

    // const clearCart=(product)=>{
    //     dispatch(apiRemoveAllproducts(product));
    // }
   
        
      
    return (  
        <>
            <div className="myButton">
            {/* onClick={()=>clearCart(product)} */}
                <Button variant="outline-dark"  >Clear Cart</Button>
            </div>
        </>
    )
}


export default RemoveAllProducts