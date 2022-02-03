import CarrouselBrands from "../components/CarrouselBrands";
import Hero from "../components/Hero";
import ListProducts from "../components/ListProducts";
import UseGetMostPopular from "../hooks/UseGetMostPopular";
import UseGetProducts from "../hooks/UseGetProducts";
import "./../styles/pages.scss";
const Home = () => {
  const { products, isLoading } = UseGetProducts("electronics", 3);
  const { mostPopular, popularLoading } = UseGetMostPopular();
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
