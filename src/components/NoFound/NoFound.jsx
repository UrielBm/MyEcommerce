import { Link } from "react-router-dom";
import nofound from "./../../assets/404.gif";
import "./nofound.scss";
const NoFound = () => {
  return (
    <>
      <div className="wrapperNofound">
        <img className="imgNoFound" src={nofound} alt="404" />
      </div>
      <Link to="/" className="return">
        Regresar
      </Link>
    </>
  );
};

export default NoFound;
