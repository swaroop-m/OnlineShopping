import React from 'react' 
import {BsInfoCircle} from 'react-icons/bs'
import { Button, Badge} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './cart.css'


//conatins-> subtotal,delivery(info),total and placeOder button //all working
function  CartPriceDetails(props) {
    
    const cartItems= useSelector(state=>state.cart.cart)

    let placeOrderClick= () => {
        console.log("Placed Order", new Date())
    }

//working subTotal
        const getSubTotal = cartItems.reduce((sum,{price})=> sum + price ,0)
        
//working delivery charge conditional
        
        const delivery =   getSubTotal > 5000 ? 0 : 50
    

//working totalPrice
        const totalPrice= getSubTotal + delivery

//working alert / info
       let  deliveryInfo = ()=> {
            alert("1. Delivery charges applicable only for order's under ₹5000 \n2. No Delivery Charges for orders above ₹5000")
        }

    return (
        <>
        {cartItems.length !== 0 && (
            <div className="total-price">
                
                <table>
                    <tr>
                        <td>SubTotal: </td>
                        <td>₹{getSubTotal}</td>
                    </tr>
                    <br/>
                    <tr>
                        <td>Delivery Charges <Badge variant="light" onClick={deliveryInfo}><BsInfoCircle/></Badge>{' '}</td>
                        {/* <p variant="outline-info" onClick={deliveryInfo} >Delivery Charges <BsInfoCircle/></p> */}
                        <td>₹{delivery}</td>
                    </tr>
                    <br/>
                    <tr>
                        <td>Total</td>
                        <td>₹{totalPrice}</td>
                    </tr>
                    <hr/>
                    <tr>
                        <Button className="btn" variant="success" style={{height:50}} onClick={placeOrderClick}>PlaceOrder</Button>
                    </tr>
                </table>
            </div>
            )}
            
        </>
    )
}

export default CartPriceDetails