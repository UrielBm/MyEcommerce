import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProdoctById } from "../axios/getProducts";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import "./../styles/pages.scss";
const DetailProduct = () => {
  const { id } = useParams();
  const [product, Setproduct] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const handleGetProduct = useCallback(
    async (isUnmount) => {
      if (!isUnmount) {
        try {
          const response = await GetProdoctById(id);
          Setproduct(response.data);
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
    handleGetProduct(isUnmount);
    return () => {
      isUnmount = true;
      handleGetProduct(isUnmount);
    };
  }, [handleGetProduct]);
  return (
    <section className="section">
      {isLoading ? <Spinner /> : <Product product={product} />}
    </section>
  );
};

export default DetailProduct;
