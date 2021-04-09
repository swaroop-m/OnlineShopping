import { createStore } from "redux";


// Common REUSABLE STATE
const initialState = {
  
  totalPrice:0,
  cart:[{quantity:1}], 
};


function reducer1(state = initialState, action) {

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
    //    case "REMOVE_PRODUCTS":
         
    //    return state.cart.filter((cartItem) => cartItem.productId !== action.payload.productId);
  
      //   let itemToRemove= state.cartItem.find(cartItem=> cartItem.productId === action.payload.productId)
      //   let new_items = state.cartItem.filter(cartItem=> cartItem.productId === action.payload.productId)
        
      //   return{
      //       ...state,
      //       cartItem: new_items,
      //   }
    
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
    
    default:
      return state;
  }
}

export const cartStore = createStore(reducer1);