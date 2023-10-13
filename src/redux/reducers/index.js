import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product.reducer";

export const MainReducer = combineReducers({
    productReducer
})

const rootReducer = (state, action) => {
    return MainReducer(state, action);
}

export default rootReducer;