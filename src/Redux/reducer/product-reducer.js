import { ActionTypes } from "../Constent/action-types";
const intialState = {
  products: [
    {
      id: 1,
      title: "Mohit",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
export const selectedproductReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
