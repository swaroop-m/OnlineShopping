import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import './cart.css'
import RemoveProductFromCart from './RemoveProductFromCart'
import { Button} from 'react-bootstrap'
import {GrSubtract} from 'react-icons/gr'
import {VscAdd} from 'react-icons/vsc'
import axios from 'axios'

//contains all products which are added to cart //allworking
function Addtocart(props) {

    let [addToCart,setAddToCart]=useState({productName:'',quantity:'',price:''})

    useEffect(()=>
    {
    setAddToCart(addToCart)
        axios.post('http://localhost:9000/api/addproducttocart',addToCart)
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
    },[])

    const cartItems= useSelector(state=>state.cart)

    // addQuantity = (product) => {
    //     this.props.dispatch({type:'ADD_QUANTITY',payload:product})
    //  }

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
                                
                                <RemoveProductFromCart/>

                            </div>
                        </div>
                    </td>
                    
                    <td> <Button  variant="light"><VscAdd/></Button> {data.quantity} <Button variant="light" ><GrSubtract/></Button></td>

                    <td>₹{data.price}</td>
                </tr>
                ) }
            </table>
        </>
    )
}


export default Addtocart