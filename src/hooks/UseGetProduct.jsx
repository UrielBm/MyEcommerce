import { useEffect, useState } from "react";
import { GetProdoctById } from "../axios/getProducts";

const UseGetProduct = (productid) => {
  useEffect(() => {
    GetProductById(productid);
  }, [productid]);

  const [product, setproduct] = useState({});
  const [isloading, setisloading] = useState(true);
  const GetProductById = async (id) => {
    try {
      const response = await GetProdoctById(id);
      setproduct(response.data);
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { product, isloading };
};

export default UseGetProduct;
