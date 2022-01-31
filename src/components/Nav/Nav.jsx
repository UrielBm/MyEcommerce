import { Link } from "react-router-dom";
import UseUserLoged from "../../hooks/UseUserLoged";

import "./nav.scss";
const Nav = () => {
  const { user, isloged } = UseUserLoged();
  return (
    <nav className="nav">
      <ul className="list-items">
        {isloged ? (
          <div className="wrapperUser">
            <p className="user">¡Bienvenido {user.username} !</p>
            <Link className="item" to="/mi_perfil">
              Mi perfil
            </Link>
            <Link className="item" to="/mi_carrito">
              Mi carrito
            </Link>
            <Link className="item" to="/mi_historial">
              Historial de compras
            </Link>
          </div>
        ) : (
          <>
            <Link className="item" to="/login">
              Inicia sesión
            </Link>
            <Link className="item" to="/registro">
              Registrate
            </Link>
          </>
        )}
        <Link className="item" to="/electronicos">
          Electronicos
        </Link>
        <Link className="item" to="/joyeria">
          Joyería
        </Link>
        <Link className="item" to="/ropa">
          Ropa
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
