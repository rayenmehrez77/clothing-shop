import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
