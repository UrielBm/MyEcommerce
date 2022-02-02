import { ADD_ARTICLE, DELETE_ARTICLE } from "../../types";
import { AddProduct, deleteProduct, SetTotal } from "../../utils";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newCart = AddProduct([...state.cart], action.payload);
      return {
        ...state,
        cart: [...newCart],
        total: SetTotal(newCart),
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        cart: deleteProduct(state.cart, action.payload),
        total: SetTotal(deleteProduct(state.cart, action.payload)),
      };
      default:
        return state
  }
};

export default CartReducer;
