import ListProducts from "../components/ListProducts";
import UseGetProducts from "../hooks/UseGetProducts";

const Jewelery = () => {
  const { products, isLoading } = UseGetProducts("jewelery");
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
