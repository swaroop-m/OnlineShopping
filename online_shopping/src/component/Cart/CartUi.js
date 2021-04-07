import React,{useEffect, useState} from 'react'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract} from 'react-icons/gr'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './cart.css'

function CartUi(props) {

    const cartItems= useSelector(state=>state.cart)

    const clear= useSelector(state=>state.cart)
    
    let [initialValue,setInitialValue] = useState(1);


        let addQuantity =() =>{
            setInitialValue(initialValue+1)
        }

        let substractQuantity =() =>{
            setInitialValue(initialValue-1)
        }

        let placeOrderClick= () => {
            console.log("Placed Order", new Date())
        }
//not working   
        let removeItem =(product) =>
        {
            console.log("removing product from cart")
        }
//not working 
        let clearCart =() =>
        {
            // cartItems([])
            console.log("clearing all items")
        }
        
//working subTotal
        const getSubTotal = cartItems.reduce((sum,{price})=> sum + price,0)
        
//delivery charge conditional
        
        const delivery =  getSubTotal > 5000 ? 0 : 50

//working totalPrice
        const totalPrice= getSubTotal + delivery

//alert / info
       let  deliveryInfo = ()=> {
            alert("1. Delivery charges applicable only for order's under ₹5000 \n2. No Delivery Charges for orders above ₹5000")
        }

    return (
        
        <div className="small-container cart-page">
            
            <h2><AiOutlineShoppingCart size="1.5em"/>My Cart</h2>  

            <div className="myButton">
                <Button variant="outline-dark" onClick={clearCart}>Clear Cart</Button>
            </div>

           
            
            <table className="table-style">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <br/>

                

                {cartItems.map((data,index)=>
                <tr key={index}>
                    <td className="table-data">
                        <div className="cart-info">
                        
                            <img src={data.pictureUrl}/>
                            <div>
                                <p>Product: {data.productName} </p>
                                <p>Price: ₹ {data.price}</p>
                                
                                <Button className="btn btn-danger" onClick={removeItem}>Remove</Button>
                            </div>

                        </div>
                    </td>
                    <td> <Button  variant="light" onClick={addQuantity}><VscAdd/></Button> {initialValue} <Button variant="light"  onClick={substractQuantity}><GrSubtract/></Button></td>
                    <td>₹{data.price}</td>
                    
                </tr>
                ) }

            </table>

            <div>
                {cartItems.length === 0 && 
                    <div className=" bg-light d-flex justify-content-center align-items-center">
                        <p>Your cart is currently empty</p> 
                        
                    </div>}
                    <br/>
                        <p>Continue Browsing <Link to="Home">Here!</Link></p>
            </div>
            
            {cartItems.length !== 0 && (
            <div className="total-price">
                
                <table>
                    <tr>
                        <td>SubTotal: </td>
                        <td>₹{getSubTotal}</td>
                    </tr>
                    <tr>
                        <td>Delivery Charges <Button variant="outline-info" onClick={deliveryInfo} ><BsInfoCircle/></Button></td>
                        <td>₹{delivery}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>₹{totalPrice}</td>
                    </tr>
                    <hr/>
                    <tr>
                        <Button className="btn btn-success" style={{height:50}} onClick={placeOrderClick}>PlaceOrder</Button>
                    </tr>
                </table>
            </div>
            )}
            
        </div>
       
    )
}


export default CartUi