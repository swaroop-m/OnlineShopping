// import { Button } from 'bootstrap'
// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import './cart.css'

// function Viewallproducts(props) {

//     let [cart,setCart]=useState({productId:"",productName:"",quantity:'',price:'',cartId:''})
//     let [viewAll,setViewAll]=useState({productId:"",productName:"",quantity:'',price:'',cartId:''})

//     function handleClick()
//     {
//        setViewAll(cart)
//     }

//     useEffect(()=>
//     {
//     setCart(cart)
//         axios.post('http://localhost:9000/api/viewallproductsfromcart',cart)
//         .then(res=>console.log(res.data))
//         .catch(error=>console.log(error))
//     },[handleClick])

    
    

//     return (
//         <>
//             <h1>View All Products</h1>
//             <Button variant="outline-dark" onClick={handleClick}>ViewAll</Button>
//         </>
//     )
// }

// export default Viewallproducts