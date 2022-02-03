import { useCallback, useEffect, useState } from "react";
import { getAllProducts } from "../axios/getProducts";
const UseGetMostPopular = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const HandleMostPopular = useCallback(async (isUnMount) => {
    if (!isUnMount) {
      try {
        const { data } = await getAllProducts();
        let mostPopular = data.sort((item1, item2) => {
          return item2.rating.rate - item1.rating.rate;
        });
        mostPopular = mostPopular.slice(0, 4);
        setProducts(mostPopular);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  }, []);
  useEffect(() => {
    let isUnMount = false;
    HandleMostPopular(isUnMount);
    return () => {
      isUnMount = true;
      HandleMostPopular(isUnMount);
    };
  }, [HandleMostPopular]);

  return {
    mostPopular: products,
    popularLoading: isLoading,
  };
};

export default UseGetMostPopular;
