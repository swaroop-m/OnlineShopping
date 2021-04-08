import React from 'react'
import { useSelector } from 'react-redux'
import './cart.css'
import RemoveProductFromCart from './RemoveProductFromCart'
import Updateproductquantity from './UpdateProductQuantity'


//contains all products which are added to cart //allworking
function Addtocart(props) {

    const cartItems= useSelector(state=>state.cart)

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
                    
                    <Updateproductquantity/>

                    <td>₹{data.price}</td>
                </tr>
                ) }
            </table>
        </>
    )
}


export default Addtocart