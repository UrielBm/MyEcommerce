import React, { useEffect } from "react";
import ListHistory from "../components/ListHistory";
import Spinner from "../components/Spinner/Spinner";
import UseHistory from "../hooks/UseHistory";
import UserRedirect from "../hooks/UserRedirect";
import UseUserLoged from "../hooks/UseUserLoged";
import "./../styles/pages.scss";
const ShoppingHistory = () => {
  const { user } = UseUserLoged();
  const { pedidos, isLoading } = UseHistory(user.id);
  const { handleStatus } = UserRedirect();
  useEffect(() => {
    handleStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="section">
      <h2 className="categorieTitle">Mi historial de compras</h2>
      {isLoading ? <Spinner /> : <ListHistory list={pedidos} />}
    </section>
  );
};

export default ShoppingHistory;
