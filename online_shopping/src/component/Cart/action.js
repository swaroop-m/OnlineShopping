import axios from "axios";

//api to add products to cart
export default function apiAddToCart(product){

    return async(product) => {
        console.log(product)
        const url="http://localhost:9000/api/addproducttocart"
        
        await axios.post(url,product)
        dispatch({type:"ADD_TO_CART",payload: product})
    }

}

// //remove product from cart
// export function apiRemoveproductFromCart(product){

//     return async(product) => {
//         console.log(product)
//         const url="http://localhost:9000/api/removeproductfromcart/{id}"
        
//         await axios.post(url,product)
//         dispatch({type:"REMOVE_PRODUCT",payload: product})
//     }

// }

// //update quantity
// export function apiUpdatedCart(product){

//     return async(product) => {
//         console.log(product)
//         const url="http://localhost:9000/api/updateproductquantity"
        
//         await axios.post(url,product)
//         dispatch({type:"UPDATED_CART",payload: product})
//     }

// }

// //remove All products
// export function apiRemoveAllproducts(product){

//     return async(dispatch) => {
//         console.log(product)
//         const url="http://localhost:9000/api/removeallproducts"
        
//         await axios.post(url,product)
//         dispatch({type:"CLEAR_CART",payload: product})
//     }

// }

// //view all cart products
// export function apiViewAllproducts(product){

//     return async(dispatch) => {
//         console.log(product)
//         const url="http://localhost:9000/api/viewallproductsfromcart"
        
//         await axios.post(url,product)
//         dispatch({type:"CLEAR_CART",payload: product})
//     }

// }

