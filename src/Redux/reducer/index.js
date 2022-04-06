import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./product-reducer";
const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedproductReducer,
});
export default reducer;
