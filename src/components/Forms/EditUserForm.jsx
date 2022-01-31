import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import UserContext from "../../context/Auth/UserContext";
import UseUserLoged from "../../hooks/UseUserLoged";
import "./form.scss";
const EditUserForm = () => {
  const { user } = UseUserLoged();
  const { updateUser } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      userName: user.username,
      email: user.email,
      phone: user.phone,
      city: user.address.city,
      zipcode: user.address.zipcode,
      street: user.address.street,
      number: user.address.number,
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("es necesario tu userName"),
      email: Yup.string()
        .email("Ingresa un email valido")
        .required("es necesario tu email"),
      phone: Yup.string().required("es necesario tu telefono"),
      city: Yup.string()
        .min(5, "nombre de la ciudad muy corto")
        .required("nombre de la cuidad requerido"),
      zipcode: Yup.string()
        .min(5, "el cpodigo postal debe ser almenos 6 caracteres")
        .required("es requerido el código postal"),
      street: Yup.string().required("es necesaria el nombre de tu calle"),
      number: Yup.number().required("es necesario el número de tu dirección"),
    }),
    onSubmit: (Updateuser) => {
      Updateuser.id = user.id;
      updateUser(Updateuser);
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h1 className="title">Editando a: {user.username}</h1>
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
        <label className="label" htmlFor="email">
          Correo electrónico:
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
        <label className="label" htmlFor="city">
          Ciudad:
        </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="nombre de la ciudad"
          className="input"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.city && formik.errors.city ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.city}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="street">
          Calle:
        </label>
        <input
          id="street"
          name="street"
          type="text"
          placeholder="Calle del domicilio"
          className="input"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.street && formik.errors.street ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.street}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="number">
          Número:
        </label>
        <input
          id="number"
          name="number"
          type="text"
          placeholder="Calle del domicilio"
          className="input"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.number && formik.errors.number ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.number}</p>
        </div>
      ) : null}
      <div className="wrapperInput">
        <label className="label" htmlFor="zipcode">
          Código postal:
        </label>
        <input
          id="zipcode"
          name="zipcode"
          type="text"
          placeholder="Código postal"
          className="input"
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.zipcode && formik.errors.zipcode ? (
        <div className="wrapperErrors">
          <p>Errors:</p>
          <p className="errors">{formik.errors.zipcode}</p>
        </div>
      ) : null}
      <div className="wrapperActionButton">
        <button type="submit" className="FormButton">
          Actualizar Perfil
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
