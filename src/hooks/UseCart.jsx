import { useContext } from "react";
import CartContext from "../context/Cart/CartContext";

const UseCart = () => {
  const { cart, cartTotal, addProduct, deleteProduct } =
    useContext(CartContext);
  return {
    cart,
    cartTotal,
    addProduct,
    deleteProduct,
  };
};

export default UseCart;
