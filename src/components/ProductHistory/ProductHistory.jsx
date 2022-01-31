import { Link } from "react-router-dom";
import UseGetProduct from "../../hooks/UseGetProduct";
import Spinner from "../Spinner/Spinner";
import "./producthistory.scss";
const ProductHistory = ({ product }) => {
  const { product: producto, isloading } = UseGetProduct(product.productId);

  return (
    <>
      {isloading ? (
        <Spinner />
      ) : (
        <li className="historyProduct">
          <Link to={`/producto/${producto.id}`} className="link">
            {producto.title}
          </Link>
          <p className="quantity">Cantidad: {product.quantity}</p>
        </li>
      )}
    </>
  );
};

export default ProductHistory;
