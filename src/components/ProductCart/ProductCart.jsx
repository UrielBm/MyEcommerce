import UseCart from "../../hooks/UseCart";
import "./productcart.scss";
const ProductCart = ({ product }) => {
  const { deleteProduct } = UseCart();
  const { image, title, price, id, cantidad } = product;
  return (
    <li className="cartProduct">
      <div className="wrapperImg">
        <img src={image} alt="imagen producto" className="img" />
      </div>
      <div className="wrapperData">
        <p className="data">
          <span className="titleData">Nombre:</span>
          {title}
        </p>
        <p className="data">
          <span className="titleData">Precio:</span> $ {price}
        </p>
        <p className="data">
          <span className="titleData">Cantidad:</span> {cantidad}
        </p>
        <button className="actionButton" onClick={() => deleteProduct(id)}>
          Quitar del carrito
        </button>
      </div>
    </li>
  );
};

export default ProductCart;
