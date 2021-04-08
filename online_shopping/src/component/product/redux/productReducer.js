const initialState = {
    product = [],
    productId: "",
    pictureUrl: "",
    productName: "",
    dimension: "",
    specification: "",
    manufacturer: "",
    quantity: 0,
    price: 0.0,
    categoryName: "",
}

const viewProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SLIDER_CLICK":
            return {...state, productId: payload.productId};
        default:
            return state;
    }
}