import { createStore } from "redux";

// Common REUSABLE STATE
const initialState = {
    
  cart: [
      {
          productName:"product1",
          price:"122",
          quantity:"1234",
      }
  ],
};

// LOGIC WE WRITE HERE :: {type: 'DEPOSIT'}
function reducer1(state = initialState, action) {
  //  LOGIC
  switch (action.type) {
    // COMMON LOGIC
    case "ADD_TO_CART":
      return { ...state, cart:[...state.cart, {productName:"product1",
      price:"122",
      quantity:"1234"}]};
    
    default:
      return state;
  }
}

export const store = createStore(reducer1);