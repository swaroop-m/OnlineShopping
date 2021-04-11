// Common REUSABLE STATE
const initialState = {
  cart:[], 
};

function cartReducer(state = initialState, action) {

  //  LOGIC
  switch (action.type) {
    // COMMON LOGIC

//addTocart
    case "ADD_TO_CART":
      let flag=false;

      const uCart = state.cart.map((cartItem) => {
          if (cartItem.productId === action.payload.productId ){
            if(cartItem.cartQuantity === null){
                cartItem.cartQuantity=0;
            }
            cartItem.cartQuantity = cartItem.cartQuantity+ 1;
            flag=true
          } 
            return cartItem;
          }
      )
      if(flag==true){  
        return { ...state, cart:[...uCart]};
      }
      else{
      return { ...state, cart:[...state.cart,{...action.payload,cartQuantity:1}]};
      }

//removeProduct
      case "REMOVE_PRODUCT":
      let itemToRemove= state.cart.find(cartItem => cartItem.productId === action.payload.productId)
      let new_items = state.cart.filter(cartItem=> cartItem.productId !== action.payload.productId)
      return {cart:new_items};

//removeAllproducts
      case 'CLEAR_CART' :
      return {...state,cart:([])}

//addQuantity
      case "ADD_QUANTITY":
        // console.log(action.payload);
        // console.log(state.cart)
      let cartItems= state.cart.find(cartItem => cartItem.productId === action.payload.productId)
      cartItems.cartQuantity =cartItems.cartQuantity+1
      return{...state,cart:[...state.cart]}


//sub quantity
case "SUB_QUANTITY":
  let cartItems1= state.cart.find(cartItem => cartItem.productId === action.payload.productId)
  if(cartItems1.cartQuantity===1){ 
    let new_items = state.cart.filter(cartItem=> cartItem.productId !== action.payload.productId)
    return{cart:new_items}
  }
  else{
    cartItems1.cartQuantity =cartItems1.cartQuantity-1
    return{...state,cart:[...state.cart]}
  }
      
      

     
      
      
        
  



        // let cart_Items = state.cart.find(cartItem => cartItem.productId === action.payload.productId) 
        
        // if(cart_Items.cartQuantity === 1){
        //     let new_items = state.cart.filter(cartItem => cartItem.productId === action.payload.productId)
            
        //     return{
        //         ...state,
        //         cart: new_items
        //     }
        // }
        // else {
        //   cart_Items.cartQuantity =cart_Items.cartQuantity -1
        //   return{...state,cart:[...state.cart,{...action.payload}]}
                
        //     }
        
        
    

    


      //updatedCart
      //case "UPDATED_CART":

      //viewAll
      //case "VIEW_ALL":
    
    default:
      return state;
  }
}


export default cartReducer;
// const cartStore = createStore(cartReducer);