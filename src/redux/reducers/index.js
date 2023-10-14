import { combineReducers } from "redux";
import { allProducts } from "./product.reducer";

export const MainReducer = combineReducers({
    allProducts
})

const rootReducer = (state, action) => {
    return MainReducer(state, action);
}

export default rootReducer;