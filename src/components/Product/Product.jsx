import { GetCategory, SetRatingStatus } from "./../../utils";
import Heart from "../Icons/Heart";
import "./product.scss";
import Cart from "../Icons/Cart";
import UseUserLoged from "../../hooks/UseUserLoged";
import UseCart from "../../hooks/UseCart";
import NoFound from "../NoFound";

const Product = ({ product }) => {
  if (product === null) {
    return <NoFound />;
  }
  const { category, description, image, price, rating, title } = product;
  const { isloged } = UseUserLoged();
  const { addProduct } = UseCart();
  return (
    <>
      <h1 className="titleproduct">{title}</h1>
      <article className="product">
        <div className="wrapperImg">
          <img className="img" src={image} alt="producto" />
        </div>
        <div className="wrapperInfo">
          <div className="wrapperData">
            <h4 className="Subtitle">Categoria</h4>
            <p className="data">{GetCategory(category)}</p>
          </div>
          <div className="wrapperData">
            <h4 className="Subtitle">Descripción</h4>
            <p className="data">{description}</p>
          </div>
          <div className="wrapperData">
            <h4 className="Subtitle">Clasificación</h4>
            <div className="rating">
              <p className="likes">
                Ratio de likes :
                <span className={SetRatingStatus(rating.rate)}>
                  {rating.rate}
                </span>
                <Heart />
              </p>
              <p className="votes">Votos: {rating.count}</p>
            </div>
          </div>
          <div className="wrapperData">
            <h4 className="Subtitle">Precio</h4>
            <p className="data">${price}</p>
          </div>
          {isloged && (
            <div className="wrapperButton">
              <button
                className="actionButton"
                onClick={() => addProduct(product)}
              >
                Agregar al carrito <Cart />
              </button>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default Product;
