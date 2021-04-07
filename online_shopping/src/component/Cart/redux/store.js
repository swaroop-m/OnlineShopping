import { createStore } from "redux";

// Common REUSABLE STATE
const initialState = {
  cart: [],
};

// LOGIC WE WRITE HERE :: {type: 'DEPOSIT'}
function reducer1(state = initialState, action) {
  //  LOGIC
  switch (action.type) {
    // COMMON LOGIC
    case "ADD_TO_CART":
      return { ...state, cart:[...state.cart, {...action.payload}]}

    
    default:
      return state;
  }
}

export const store = createStore(reducer1);