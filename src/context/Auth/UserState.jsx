import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getMyUser, loginUser, registerUser, updating } from "../../axios/user";
import { DO_LOGIN, DO_REGISTER, UPDATE_USER } from "../../types";
import { BadAlert, GoodAlert } from "../../utils";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
const UserState = (props) => {
  const initialState = {
    user: {},
    isLoged: false,
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setRegister = async (user) => {
    const newUser = {
      email: user.email,
      username: user.userName,
      password: user.password,
      name: {
        firstname: "Uriel",
        lastname: "Benítez",
      },
      address: {
        city: "mexico city",
        street: user.address,
        number: 136,
        zipcode: "42084",
        geolocation: {
          tag: "19.432608",
          long: "-99.133209",
        },
        phone: user.phone,
      },
    };
    try {
      const response = await registerUser(newUser);
      const myUser = response.data;
      dispatch({
        type: DO_REGISTER,
        payload: myUser,
      });
      GoodAlert("Registro exitoso", "Se realizo exitosamente tu registro", () =>
        navigate("/login")
      );
    } catch (error) {
      BadAlert("¡Error!", "No se pudo realizar el registro, intenta más tarde");
    }
  };
  const userLogin = async (user) => {
    try {
      const response = await loginUser(user);
      sessionStorage.setItem("token", response.data.token);
      const userResponse = await getMyUser();
      const myUser = userResponse.data;
      dispatch({
        type: DO_LOGIN,
        payload: myUser,
      });
      navigate("/");
    } catch (error) {
      BadAlert(
        "¡Error!",
        "Error intente de nuevo, verifique usuario y contraseña"
      );
    }
  };
  const updateUser = async (user) => {
    const editUser = {
      email: user.email,
      username: user.userName,
      password: "123456",
      name: {
        firstname: "Uriel",
        lastname: "Benítez",
      },
      address: {
        city: user.city,
        street: user.street,
        number: user.number,
        zipcode: user.zipcode,
        geolocation: {
          tag: "19.432608",
          long: "-99.133209",
        },
      },
      phone: user.phone,
    };
    try {
      await updating(editUser, user.id);
      editUser.id = user.id;
      dispatch({
        type: UPDATE_USER,
        payload: editUser,
      });
      GoodAlert(
        "Actualización exitosa",
        "Se actualizarón los datos del perfil",
        () => navigate("/")
      );
    } catch (error) {
      BadAlert(
        "¡Error!",
        "Error al intentar actualizar el usuario, intente de nuevo más tarde"
      );
    }
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isloged: state.isLoged,
        setRegister,
        userLogin,
        updateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
