import { useCallback, useReducer } from "react";
import { ADD_ARTICLE, DELETE_ARTICLE } from "../../types";
import { SuccesAddProduct, WarningAlert } from "../../utils";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = (props) => {
  const initialState = {
    cart: [],
    total: 0,
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addProduct = useCallback((product) => {
    const newProduct = product;
    newProduct.cantidad = 1;
    newProduct.totalPrice = newProduct.price * newProduct.cantidad;
    dispatch({
      type: ADD_ARTICLE,
      payload: newProduct,
    });
    SuccesAddProduct();
  }, []);
  const deleteProduct = useCallback((id) => {
    const Productid = id;
    WarningAlert(
      "¿Estás seguro?",
      `se va eliminar del carrito el producto`,
      () =>
        dispatch({
          type: DELETE_ARTICLE,
          payload: Productid,
        })
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartTotal: state.total,
        addProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartState;
