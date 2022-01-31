import { useContext } from "react";
import UserContext from "../context/Auth/UserContext";

const UseUserLoged = () => {
  const { user, isloged } = useContext(UserContext);
  return {
    user,
    isloged,
  };
};

export default UseUserLoged;
