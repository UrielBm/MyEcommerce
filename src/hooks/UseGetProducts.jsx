import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../axios/getProducts";

const UseGetProducts = (categoria, limit) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const HandleGetProducts = useCallback(
    async (isUnmount) => {
      if (!isUnmount) {
        try {
          const { data } = await getProducts(categoria, limit);
          setProducts(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      }
    },
    [categoria, limit]
  );

  useEffect(() => {
    let isUnmount = false;
    HandleGetProducts(isUnmount);

    return () => {
      isUnmount = true;
      HandleGetProducts(isUnmount);
    };
  }, [HandleGetProducts]);

  return { products, isLoading };
};

export default UseGetProducts;
