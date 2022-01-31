import { DO_LOGIN, DO_REGISTER, UPDATE_USER } from "../../types";

const UserReducer = (state, action) => {
  switch (action.type) {
    case DO_REGISTER:
      return {
        ...state,
        user: action.payload,
        isLoged: true,
      };
    case DO_LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoged: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
  }
};

export default UserReducer;
