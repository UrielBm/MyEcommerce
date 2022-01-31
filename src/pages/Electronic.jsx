import React, { useEffect } from "react";
import ListProducts from "../components/ListProducts";
import UseGetProducts from "../hooks/UseGetProducts";
import "./../styles/pages.scss";
const Electronic = () => {
  useEffect(() => {
    HandleGetProducts();
  }, []);
  const { products, isLoading, HandleGetProducts } =
    UseGetProducts("electronics");
  return (
    <section className="section">
      <h2 className="categorieTitle">Electronica</h2>
      <ListProducts
        products={products}
        title="Articulos"
        isLoading={isLoading}
      />
    </section>
  );
};

export default Electronic;
