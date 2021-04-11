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
            cartItem.quantity = cartItem.quantity+ 1;
            flag=true
          } 
            return cartItem;
          }
      )
      if(flag==true){  
        return { ...state, cart:[...uCart]};
      }
      else{
      return { ...state, cart:[...state.cart,{...action.payload}]};
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
      let cartItem= state.cart.find(cartItem => cartItem.productId === action.payload.productId)
      cartItem.quantity = cartItem.quantity+ 1 ;
      return{...state}
    

      // case "SUB_QUANTITY":
      //     const subQuantity = state.cart.find((cartItem)=>{
      //       if(cartItem.productId === action.payload.productId)
      //       cartItem.quantity =cartItem.quantity - 1 
      //       return{...state ,cart:[...subQuantity]
      //       }
      // })

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