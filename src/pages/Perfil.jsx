import { useEffect, useState } from "react";
import DetailPerfil from "../components/DetailPerfil";
import { EditUserForm } from "../components/Forms";
import UserRedirect from "../hooks/UserRedirect";
import UseUserLoged from "../hooks/UseUserLoged";
import "./../styles/pages.scss";
const Perfil = () => {
  const [isForm, setisForm] = useState(false);
  const { isloged } = UseUserLoged();
  const { handleStatus } = UserRedirect();
  useEffect(() => {
    handleStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isloged) {
    return (
      <section className="section">
        <h2 className="categorieTitle">Mi perfil</h2>
        {isForm ? <EditUserForm /> : <DetailPerfil setisForm={setisForm} />}
      </section>
    );
  } else {
    return <p>redirigiendo a Home</p>;
  }
};

export default Perfil;
