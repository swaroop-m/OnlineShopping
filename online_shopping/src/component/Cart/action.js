import axios from "axios";

export default function apiAddToCart(requestBody){

    return async(dispatch) => {
        console.log(requestBody)
        const url="http://localhost:9000/api/addproducttocart"
        
        await axios.post(url,requestBody)
        dispatch({type:"ADD_TO_CART",payload: requestBody})
    }

}

// export default function apiRemoveAllproducts(product){

//     return async(dispatch) => {
//         console.log(product)
//         const url="http://localhost:9000/api/removeallproducts"
        
//         await axios.post(url,product)
//         dispatch({type:"CLEAR_CART",payload: product})
//     }

// }



