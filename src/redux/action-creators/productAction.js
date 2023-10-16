import { ActionTypes } from "../actions";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const addToCartProduct = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const increaseBuyQuantity = (product) => {
    return {
        type: ActionTypes.INCREASE_BUY_ITEM,
        payload: product
    }
}


export const decreaseBuyQuantity = (product) => {
    return {
        type: ActionTypes.DECREASE_BUY_ITEM,
        payload: product
    }
}

export const deleteCartItem = (product) => {
    return {
        type: ActionTypes.DELETE_CART_ITEM,
        payload: product
    }
}


export const deleteAllCartItems = () => {
    return {
        type: ActionTypes.EMPTY_CART,
        payload: [],
    }
}