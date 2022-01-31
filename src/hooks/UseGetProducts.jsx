import { useState } from "react";
import { getProducts } from "../axios/getProducts";

const UseGetProducts = (categoria, limit) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const HandleGetProducts = async () => {
    try {
      const { data } = await getProducts(categoria, limit);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { products, isLoading, HandleGetProducts };
};

export default UseGetProducts;
