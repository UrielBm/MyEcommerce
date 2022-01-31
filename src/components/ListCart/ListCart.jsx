import React from "react";
import ProductCart from "../ProductCart";
import "./listcart.scss";
const ListCart = ({ cart, total }) => {
  return (
    <section className="wrapperListCart">
      {cart.length === 0 ? (
        <p className="noArticles">Aun no tienes articulos en tu carrito</p>
      ) : (
        <>
          <ul className="listProducts">
            {cart.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </ul>
          <div className="wrapperTotal">
            Total a pagar <span className="total">$ {total.toFixed(2)}</span>
          </div>
        </>
      )}
    </section>
  );
};

export default ListCart;
