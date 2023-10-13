import { ActionTypes } from "../actions"

const intialState = {
    products: []
}

export const productReducer = (state = intialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        case ActionTypes.SELECTED_PRODUCT:
            return state;

        default:
            return state;
    }
}