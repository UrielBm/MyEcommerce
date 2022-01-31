import { useState } from "react";
import { getHistoryCart } from "../axios/getCart";

const UseHistory = () => {
  const [pedidos, setpedidos] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const handleGetCart = async (id) => {
    try {
      const response = await getHistoryCart(id);
      const ArrayPedidos = response.data;
      setpedidos(ArrayPedidos);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { pedidos, isLoading, handleGetCart };
};

export default UseHistory;
