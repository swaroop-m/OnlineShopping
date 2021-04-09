import axios from "axios";

export default function apiAddToCart(product){

    return async(product) => {
        console.log(product)
        const url="http://localhost:9000/api/addproducttocart"
        
        await axios.post(url,requestBody)
        dispatch({type:"ADD_TO_CART",payload: product})
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



