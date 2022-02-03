import ListProducts from "../components/ListProducts";
import UseGetProducts from "../hooks/UseGetProducts";
import "./../styles/pages.scss";
const Electronic = () => {
  const { products, isLoading } = UseGetProducts("electronics");
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
