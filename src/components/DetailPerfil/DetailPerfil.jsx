import React from "react";
import UseUserLoged from "../../hooks/UseUserLoged";
import Edit from "../Icons/Edit";
import avatar from "./../../assets/avatar.jpg";
import "./detailperfil.scss";
const DetailPerfil = ({ setisForm }) => {
  const { user } = UseUserLoged();
  const { username, email, phone, address } = user;
  return (
    <>
      <div className="wrapperMyPerfil">
        <div className="wrapperAvatar">
          <img className="avatar" src={avatar} alt="avatr perfil" />
        </div>
        <div className="wrapperUserData">
          <p className="item">
            Nombre de usuario: <span className="data">{username}</span>
          </p>
          <p className="item">
            Correo: <span className="data">{email}</span>
          </p>
          <p className="item">
            Número de teléfono: <span className="data">{phone}</span>
          </p>
          <div className="wrapperAddress">
            <h5>Dirección</h5>
            <div className="wrapperData">
              <p className="item">
                Ciudad: <span className="data">{address.city}</span>
              </p>
              <p className="item">
                Calle: <span className="data">{address.street}</span>
              </p>
              <p className="item">
                C.p: <span className="data">{address.zipcode}</span>{" "}
              </p>
              <p className="item">
                No: <span className="data">{address.number}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapperEdit">
        <Edit onClink={() => setisForm(true)} />
      </div>
    </>
  );
};

export default DetailPerfil;
