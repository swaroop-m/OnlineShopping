import { createStore } from "redux";


// Common REUSABLE STATE
const initialState = {
  cart:[], 
};

function cartReducer(state = initialState, action) {

  //  LOGIC
  switch (action.type) {
    // COMMON LOGIC

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

        let itemToRemove= state.cart.find(cartItem => cartItem.productId !== action.payload.productId)
        let new_items = state.cart.filter(cartItem => cartItem.productId !== action.payload.productId)
        
        //calculating the total
        console.log(itemToRemove)
        return{
            ...state,
            cart:[new_items] 
        }
    
  
    
      //removeAllproducts
      case 'CLEAR_CART' :
        return {...state,cart:([])}
      

      // case "ADD_QUANTITY":
      //     const addQuantity = state.cart.find((cartItem)=>{
      //       if(cartItem.productId === action.payload.productId)
      //       cartItem.quantity =cartItem.quantity +1 
      //       return{...state ,cart:[...addQuantity]
      //       }
      // })

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