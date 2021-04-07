import React,{useEffect, useState} from 'react'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract} from 'react-icons/gr'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart } from 'react-icons/ai'
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
        let removeItem =() =>
        {
            
            console.log("removing product from cart")
        }
//not working v 
        let clearCart =() =>
        {
            cartItems([])
            console.log("clearing all items")
        }
        
//working
        const getSubTotal =()=>{
            return cartItems.reduce((sum,{price})=> sum + price,0)
        }

        const delivery= 40

//notworking

        // let getTotal =()=>{
        //   setTotal= getSubTotal(total+ 40)
        // }

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
            

            <div className="total-price">
                <table>
                    <tr>
                        <td>SubTotal: </td>
                        <td>₹{getSubTotal()}</td>
                    </tr>
                    <tr>
                        <td>Delivery cost: </td>
                        <td>₹{delivery}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>₹{()=>getSubTotal+delivery}</td>
                    </tr>
                </table>
              
            </div>
            <hr/>
            <div className="d-flex justify-content-center align-items-center">
            <Button className="btn btn-success placeOrder" style={{height:50}} onClick={placeOrderClick}>Place Order</Button>
            </div>
        </div>
       
    )
}


export default CartUi