import React, { useEffect } from "react";
import CarrouselBrands from "../components/CarrouselBrands";
import Hero from "../components/Hero";
import ListProducts from "../components/ListProducts";
import UseGetMostPopular from "../hooks/UseGetMostPopular";
import UseGetProducts from "../hooks/UseGetProducts";
import "./../styles/pages.scss";
const Home = () => {
  useEffect(() => {
    HandleGetProducts();
    HandleMostPopular();
  }, []);

  const { products, isLoading, HandleGetProducts } = UseGetProducts(
    "electronics",
    3
  );
  const { mostPopular, popularLoading, HandleMostPopular } =
    UseGetMostPopular();
  return (
    <main className="section">
      <Hero />
      <ListProducts
        products={mostPopular}
        title="Top Favoritos"
        isLoading={popularLoading}
      />
      <ListProducts
        products={products}
        title="Mejores gadgets"
        isLoading={isLoading}
      />
      <CarrouselBrands />
    </main>
  );
};

export default Home;
