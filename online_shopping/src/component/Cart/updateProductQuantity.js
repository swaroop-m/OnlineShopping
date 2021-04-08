import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Button} from 'react-bootstrap'
import {GrSubtract} from 'react-icons/gr'
import {VscAdd} from 'react-icons/vsc'
import './cart.css'

//contains quantity add or sub
function Updateproductquantity(props) {

    const cartItems= useSelector(state=>state.cart)
    let [initialValue,setInitialValue] = useState(1);


    let addQuantity =() =>{
        setInitialValue(initialValue+1)
    }

    let substractQuantity =() =>{
        setInitialValue(initialValue-1)
    } 

    return (
        <>
            <td> <Button  variant="light" onClick={addQuantity}><VscAdd/></Button> {initialValue} <Button variant="light"  onClick={substractQuantity}><GrSubtract/></Button></td>
        </>
    )
}


export default Updateproductquantity