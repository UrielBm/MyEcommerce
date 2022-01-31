import { Link } from "react-router-dom";
import { GetCategory } from "./../../utils";
import Heart from "../Icons/Heart";
import "./cardproduct.scss";
import Cart from "../Icons/Cart";
import UseUserLoged from "../../hooks/UseUserLoged";
import UseCart from "../../hooks/UseCart";
const CardProduct = ({ product }) => {
  const { id, category, description, image, price, title, rating } = product;
  const { isloged } = UseUserLoged();
  const { addProduct } = UseCart();
  return (
    <article className="cardProduct">
      <div className="wrapperImg">
        <img className="image" src={image} alt="product" />
      </div>
      <div className="wrapperData">
        <div className="rating">
          <p className="likes">
            <span className="type">ratio:</span>
            {rating.rate} <Heart />
          </p>
          <p>
            <span className="type">Votos:</span>
            {rating.count}
          </p>
        </div>
        <p className="category">
          <span className="type">Categoria:</span>
          {GetCategory(category)}
        </p>
        <h4 className="titleArticle">
          <span className="type">Nombre:</span>
          {title}
        </h4>
        <p className="description">
          <span className="type">Descripción:</span>
          {description}
        </p>
        <div className="wrapperCart">
          <p className="price">
            <span className="type">Precio:</span> ${price}
          </p>
          {isloged && (
            <button className="CartButton" onClick={() => addProduct(product)}>
              Agregar <Cart />
            </button>
          )}
        </div>
        <Link className="actionButton" to={`/producto/${id}`}>
          + Aceca del producto
        </Link>
      </div>
    </article>
  );
};

export default CardProduct;
