import React, { useEffect } from "react";
import ListProducts from "../components/ListProducts";
import UseGetProducts from "../hooks/UseGetProducts";

const Jewelery = () => {
  useEffect(() => {
    HandleGetProducts();
  }, []);
  const { products, isLoading, HandleGetProducts } = UseGetProducts("jewelery");
  return (
    <section className="section">
      <h2 className="categorieTitle">Joyería</h2>
      <ListProducts
        products={products}
        title="Articulos"
        isLoading={isLoading}
      />
    </section>
  );
};

export default Jewelery;
