import { useNavigate } from "react-router-dom";
import UseUserLoged from "./UseUserLoged";
const UserRedirect = () => {
  const { isloged } = UseUserLoged();
  const navigate = useNavigate();
  const handleStatus = () => {
    if (!sessionStorage.getItem("token") || !isloged) {
      navigate("/");
    }
  };
  return {
    handleStatus,
  };
};

export default UserRedirect;
