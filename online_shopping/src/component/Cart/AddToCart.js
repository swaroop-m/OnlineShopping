//author: Sajan Kamath V
//code Starts here
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button} from 'react-bootstrap';
import {GrSubtract} from 'react-icons/gr';
import {VscAdd} from 'react-icons/vsc';
import './cart.css';


//contains all products which are added to cart 
//remove button -> remove a product from cart onClick
//addQuantity -> onclick increment quantity +1
//deleteQuantity -> onclick decrement quantity -1
function Addtocart(props) {

    const cartItems= useSelector(state=>state.cart.cart)

    const dispatch = useDispatch();

    const removeFromcart = (product) => {
        dispatch({type:'REMOVE_PRODUCT', payload: product})
     }

    const addQuantity = (product) => {
        dispatch({type:'ADD_QUANTITY',payload:product})
     }
     
     const subQuantity = (product) => {
        dispatch({type:'SUB_QUANTITY',payload:product})
     }

    return (
        <>
             <table className="table-style">
                <tr>
                    <th className="table-header">Product</th>
                    <th className="table-header">Quantity</th>
                    <th className="table-header">Price</th>
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
                                
                                
                                <Button className="btn btn-danger"onClick={() => removeFromcart(data)}>Remove</Button>

                            </div>
                        </div>
                    </td>
                    {/*  */}
                    <td> <Button  variant="light" onClick={()=>(addQuantity(data))}><VscAdd/></Button> {data.cartQuantity} <Button variant="light" onClick={()=>(subQuantity(data))}><GrSubtract/></Button></td>

                    <td>₹{data.price * data.cartQuantity}</td>
                </tr>
                ) }
            </table>
        </>
    )
}


export default Addtocart

//Code ends here