import React from "react";
import { Link } from "react-router-dom";
import UseUserLoged from "../../hooks/UseUserLoged";
import "./hero.scss";
const Hero = () => {
  const { isloged } = UseUserLoged();
  return (
    <>
      {isloged ? (
        <section className="hero_logged">
          <h2 className="title">
            ¡Compra toda la tienda esta temporada y ahorra en cada producto!
          </h2>
        </section>
      ) : (
        <section className="hero">
          <h2 className="title">¡Ingresa y vive toda la experiencia!</h2>
          <Link className="actionButton" to="/registro">
            Registrarse
          </Link>
        </section>
      )}
    </>
  );
};

export default Hero;
