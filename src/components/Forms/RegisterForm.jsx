import { useFormik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import UserContext from "../../context/Auth/UserContext";
import "./form.scss";
const RegisterForm = () => {
  const { setRegister } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      userName: "",
      phone: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("es necesario tu userName"),
      phone: Yup.string().required("es necesario tu telefono"),
      address: Yup.string()
        .max(120, "dirección muy larga")
        .required("es necesario tu dirección"),
      email: Yup.string()
        .email("Ingresa un email valido")
        .required("es necesario tu email"),
      password: Yup.string()
        .min(6, "el password debe de ser al menos 6 caracteres")
        .required("es necesario un password"),
    }),
    onSubmit: (user) => {
      setRegister(user);
    },
  });
  const handleDisableButton = () => {
    return formik.values.userName.length > 0 ? true : false;
  };
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h1 className="title">
        ¡Registrate y disfruta de todas las caracteristicas!
      </h1>
      <div className="wrapperInput">
        <label className="label" htmlFor="userName">
          Nombre de usuario:
        </label>
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder="Tú nombre de usuario"
          className="input"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.userName && formik.errors.userName ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.userName}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="phone">
          Teléfono:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="771-111-1110"
          className="input"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxLength="10"
        />
      </div>
      {formik.touched.phone && formik.errors.phone ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.phone}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="address">
          Dirección:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Pachuca de Soto calle Principal"
          className="input"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.address && formik.errors.address ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.address}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@example.com"
          className="input"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.email}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="password">
          Contraseña:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="tu contraseña"
          className="input"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.password}</p>
        </div>
      ) : null}
      <div className="wrapperLink">
        <Link to="/login" className="link">
          ya tengo cuenta
        </Link>
      </div>
      <div className="wrapperActionButton">
        <button
          type="submit"
          className="FormButton"
          disabled={!handleDisableButton()}
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
