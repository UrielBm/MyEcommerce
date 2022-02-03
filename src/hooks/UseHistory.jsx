import { useCallback, useEffect, useState } from "react";
import { getHistoryCart } from "../axios/getCart";

const UseHistory = (id) => {
  const [pedidos, setpedidos] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const handleGetHistory = useCallback(
    async (isUnmount) => {
      if (!isUnmount) {
        try {
          const response = await getHistoryCart(id);
          const ArrayPedidos = response.data;
          setpedidos(ArrayPedidos);
          setisLoading(false);
        } catch (error) {
          setisLoading(false);
        }
      }
    },
    [id]
  );
  useEffect(() => {
    let isUnmount = false;
    handleGetHistory(isUnmount);
    return () => {
      isUnmount = true;
      handleGetHistory(isUnmount);
    };
  }, [handleGetHistory]);

  return { pedidos, isLoading };
};

export default UseHistory;
