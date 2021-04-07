import React,{ useState} from 'react'
import { Button} from 'react-bootstrap'
import {VscAdd} from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import {GrSubtract} from 'react-icons/gr'
import './cart.css'


//contains all products which are added to cart, remove item button, quantity add or sub
function Addtocart(props) {

    const cartItems= useSelector(state=>state.cart)

    let [initialValue,setInitialValue] = useState(1);


    let addQuantity =() =>{
        setInitialValue(initialValue+1)
    }

    let substractQuantity =() =>{
        setInitialValue(initialValue-1)
    }

    //not working   
    let removeItem =(product) =>
    {
        console.log("removing product from cart")
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
                                
                                <Button className="btn btn-danger" onClick={removeItem}>Remove</Button>
                            </div>

                        </div>
                    </td>
                    
                    <td> <Button  variant="light" onClick={addQuantity}><VscAdd/></Button> {initialValue} <Button variant="light"  onClick={substractQuantity}><GrSubtract/></Button></td>
                    <td>₹{data.price}</td>
                    
                </tr>
                ) }

            </table>
        </>
    )
}


export default Addtocart