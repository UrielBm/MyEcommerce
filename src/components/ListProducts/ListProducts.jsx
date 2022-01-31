import React from "react";
import CardProduct from "../CardProduct";
import Spinner from "../Spinner";
import "./listproducts.scss";
const ListProducts = ({ products, title, isLoading }) => {
  return (
    <section className="listProducts">
      <div className="wrapperTitle">
        <h3 className="sectionTitle">{title}</h3>
      </div>
      <div className="wrapperProducts">
        {isLoading ? (
          <Spinner />
        ) : (
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default ListProducts;
