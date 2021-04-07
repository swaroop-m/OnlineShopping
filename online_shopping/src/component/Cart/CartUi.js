import React,{useEffect, useState} from 'react'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract} from 'react-icons/gr'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
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
//not working v 
        let clearCart =() =>
        {
            // cartItems([])
            console.log("clearing all items")
        }
        
//working subTotal
        const getSubTotal = cartItems.reduce((sum,{price})=> sum + price,0)
        
//delivery charge conditional
        
        const delivery =  getSubTotal > 5000 ? 0 : 50

//notworking
        const totalPrice= getSubTotal + delivery

    return (
        
        <div className="small-container cart-page">
            
            <h2><AiOutlineShoppingCart size="1.5em"/>My Cart</h2>  

            <div className="myButton">
                <Button variant="outline-dark" onClick={clearCart}>Clear Cart</Button>
            </div>

           
            
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <br/>

                

                {cartItems.map((data,index)=>
                <tr key={index}>
                    <td>
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

            <div>{cartItems.length === 0 && <div className=" bg-light d-flex justify-content-center align-items-center"><h3>Cart is empty</h3></div>}</div>
            
            {cartItems.length !== 0 && (
            <div className="total-price">
                
                <table>
                    <tr>
                        <td>SubTotal: </td>
                        <td>₹{getSubTotal}</td>
                    </tr>
                    <tr>
                        <td>Delivery cost: <BsInfoCircleFill/></td>
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