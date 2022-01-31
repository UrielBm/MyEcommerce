import { useState } from "react";
import { getAllProducts } from "../axios/getProducts";
const UseGetMostPopular = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const HandleMostPopular = async () => {
    try {
      const { data } = await getAllProducts();
      let mostPopular = data.sort((item1, item2) => {
        return item2.rating.rate - item1.rating.rate;
      });
      mostPopular = mostPopular.slice(0, 4);
      setProducts(mostPopular);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    mostPopular: products,
    popularLoading: isLoading,
    HandleMostPopular,
  };
};

export default UseGetMostPopular;
