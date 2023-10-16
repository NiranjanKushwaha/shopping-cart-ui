import { ActionTypes } from "../actions"

const intialState = {
    products: [],
    cartItems: [],
    currentViewItem: []
}

export const allProducts = (state = intialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ActionTypes.ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case ActionTypes.INCREASE_BUY_ITEM:
            if (state.cartItems && state.cartItems.length) {
                const updatedCart = state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        item["quantity"] += 1;
                    }
                    return item;
                })
                return { ...state, cartItems: updatedCart };
            }
            return state;
        case ActionTypes.DECREASE_BUY_ITEM:
            if (state.cartItems && state.cartItems.length) {
                const updatedCart = state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        item["quantity"] -= 1;
                    }
                    return item;
                })
                return { ...state, cartItems: updatedCart };
            }
            return state;

        case ActionTypes.DELETE_CART_ITEM:
            return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };

        case ActionTypes.EMPTY_CART:
            return { ...state, cartItems: [] };

        case ActionTypes.FETCH_PRODUCT_SUCCESS:
            return { ...state, currentViewItem: action.payload };

        case ActionTypes.FETCH_PRODUCT_FAILED:
            return { ...state, currentViewItem: [] }
        default:
            return state;
    }
}

export const cartProductAction = (state = intialState, action) => {

}