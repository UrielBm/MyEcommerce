import ListProducts from "../components/ListProducts";
import UseGetClothes from "../hooks/UseGetClothes";
import "./../styles/pages.scss";
const Clothes = () => {
  const { select, products, isLoading, ropa, loadingwoman, handleOnChange } =
    UseGetClothes();
  return (
    <section className="section">
      <h2 className="categorieTitle">Ropa</h2>
      <div className="wrapperSelect">
        <select
          value={select}
          onChange={(e) => handleOnChange(e)}
          className="selectClothes"
        >
          <option value={1}>Toda</option>
          <option value={2}>Ropa de mujer</option>
          <option value={3}>Ropa de hombre</option>
        </select>
      </div>
      {select === 1 ? (
        <>
          <ListProducts
            products={products}
            title="Ropa de hombre"
            isLoading={isLoading}
          />
          <ListProducts
            products={ropa}
            title="Ropa de mujer"
            isLoading={loadingwoman}
          />
        </>
      ) : select === 2 ? (
        <ListProducts
          products={ropa}
          title="Ropa de mujer"
          isLoading={loadingwoman}
        />
      ) : (
        <ListProducts
          products={products}
          title="Ropa de hombre"
          isLoading={isLoading}
        />
      )}
    </section>
  );
};

export default Clothes;
