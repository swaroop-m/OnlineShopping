import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import './cart.css'
import { Button} from 'react-bootstrap'
import {GrSubtract} from 'react-icons/gr'
import {VscAdd} from 'react-icons/vsc'


//contains all products which are added to cart //allworking
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
     
    console.log(cartItems);



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