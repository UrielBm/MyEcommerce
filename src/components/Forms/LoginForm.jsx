import React, { useContext, useState } from "react";
import UserContext from "../../context/Auth/UserContext";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./form.scss";
import Eye from "../Icons/Eye";

const LoginForm = () => {
  const [isPassword, setisPassword] = useState("password");
  const { userLogin } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("es necesario tu nombre de usuario"),
      password: Yup.string()
        .min(6, "el password debe de ser al menos 6 caracteres")
        .required("es necesario un password"),
    }),
    onSubmit: (user) => {
      userLogin(user);
    },
  });
  const handleDisableButton = () => {
    const user = formik.values.username.length;
    const pass = formik.values.password.length;
    return user > 0 && pass > 0 ? true : false;
  };
  const handleSetType = () => {
    isPassword === "password"
      ? setisPassword("text")
      : setisPassword("password");
  };
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h1 className="title">
        ¡Ingresa y has tus compras de manera sencilla y rápida!
      </h1>
      <div className="wrapperInput">
        <label className="label" htmlFor="username">
          Nombre de usuario:
        </label>
        <input
          id="userName"
          name="username"
          type="text"
          placeholder="Tú nombre de usuario"
          className="input"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.username && formik.errors.username ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.username}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="password">
          Contraseña:
        </label>
        <div className="wrapperPassword">
          <input
            id="password"
            name="password"
            type={isPassword}
            placeholder="tu contraseña"
            className="input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Eye onClick={handleSetType} type={isPassword} />
        </div>
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.password}</p>
        </div>
      ) : null}
      <div className="wrapperLink">
        <Link to="/registro" className="link">
          No tengo cuenta
        </Link>
      </div>
      <div className="wrapperActionButton">
        <button
          type="submit"
          className="FormButton"
          disabled={!handleDisableButton()}
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
