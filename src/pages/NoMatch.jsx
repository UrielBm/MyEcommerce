import NoFound from "../components/NoFound";
import "./../styles/pages.scss";
const NoMatch = () => {
  return (
    <section className="section">
      <h2 className="categorieTitle">Ruta no encontrada</h2>
      <NoFound />
    </section>
  );
};

export default NoMatch;
