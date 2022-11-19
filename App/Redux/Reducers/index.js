import userReducer  from "./userReducer";
import { combineReducers } from "redux";
import productDetailReducer from "./productDetailReducer";

const rootReducers = combineReducers ({
    user : userReducer,
    productDetail : productDetailReducer
})

export default rootReducers