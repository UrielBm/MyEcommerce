import React, { useEffect } from "react";
import ListCart from "../components/ListCart";
import UseCart from "../hooks/UseCart";
import UserRedirect from "../hooks/UserRedirect";
import "./../styles/pages.scss";
const DetailCart = () => {
  const { cart, cartTotal } = UseCart();
  const { handleStatus } = UserRedirect();
  useEffect(() => {
    handleStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="section">
      <h2 className="categorieTitle">Carrito de compras</h2>
      <ListCart cart={cart} total={cartTotal} />
    </section>
  );
};

export default DetailCart;
