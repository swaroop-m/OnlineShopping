import axios from 'axios'

//addToCart
export default axios.create({
    baseURL : 'http://localhost:9000/api/addtocart',
})