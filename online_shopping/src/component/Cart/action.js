//author: Sajan Kamath V
//code Starts here

import axios from "axios";

//api to add products to cart
export function apiAddToCart(product,products){

    return async(dispatch) => {
        console.log(product)
        const url="http://localhost:9000/api/addproducttocart"
        
        await axios.post(url,{products:products})
        dispatch({type:"ADD_TO_CART",payload: product})
    }
}

// api call code ends here


