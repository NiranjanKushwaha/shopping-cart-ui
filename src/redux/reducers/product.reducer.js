import { ActionTypes } from "../actions"

const intialState = {
    products: [],
    cartItems: []
}

export const allProducts = (state = intialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        default:
            return state;
    }
}