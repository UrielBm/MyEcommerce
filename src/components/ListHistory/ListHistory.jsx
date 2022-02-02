import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import ProductHistory from "../ProductHistory";
import "./listhistory.scss";
const ListHistory = ({ list }) => {
  return (
    <section className="wrapperPedidos">
      {list.length > 0 ? (
        list.map((pedido) => (
          <div key={pedido.id} className="pedidos">
            <p className="date">
              Fecha:{" "}
              {formatDistanceToNow(new Date(pedido.date), { locale: es })} atras
            </p>

            {pedido.products.map((product, index) => (
              <ul key={index} className="listProduct">
                <ProductHistory product={product} />
              </ul>
            ))}
          </div>
        ))
      ) : (
        <p>No hay registro de compras</p>
      )}
      {list.length > 0 && (
        <p className="textBefore">Pedidos anteriores: {list.length} pedidos </p>
      )}
    </section>
  );
};

export default ListHistory;
