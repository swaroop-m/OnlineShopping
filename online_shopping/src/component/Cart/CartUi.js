import React,{useState} from 'react'
import {VscAdd} from 'react-icons/vsc'
import {GrSubtract} from 'react-icons/gr'
import { Button, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart } from 'react-icons/ai'

function CartUi(props) {

    const cartItems= useSelector(state=>state.cart)

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
    
        let removeItem =() =>
        {
            console.log("removing product from cart")
        }

    return (
        
        <div className="small-container cart-page">
            <h3><AiOutlineShoppingCart size="1.5em"/>My Cart</h3>  

            <div className="bg-black d-flex justify-content-end">
                <Button variant="dark">Clear Cart</Button>
            </div>
    
            <table >
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {cartItems.map((data,index)=>
                <tr key={index}>
                    <td>
                        <div className="cart-info">
                        
                            <img src="https://www.accenture.com/t20210219T090132Z__w__/in-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"/>
                            <div>
                                <p>product name</p>
                                <p>Price: ₹100</p>
                                <br/>
                                <Button className="btn btn-danger" onClick={removeItem}>Remove</Button>
                            </div>

                        </div>
                    </td>
                    <td> <Button  variant="light" onClick={addQuantity}><VscAdd/></Button> {initialValue} <Button variant="light"  onClick={substractQuantity}><GrSubtract/></Button></td>
                    <td>₹100</td>
                    
                </tr>
                ) }

            </table>
            

            <div className="total-price">
                <table>
                    <tr>
                        <td>SubTotal</td>
                        <td>₹20</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>₹20</td>
                    </tr>
                    <tr>
                        <td>delivery</td>
                        <td>₹40</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>₹260</td>
                    </tr>
                </table>
            </div>
        </div>
       
    )
}


export default CartUi