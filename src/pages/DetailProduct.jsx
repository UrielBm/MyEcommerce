import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProdoctById } from "../axios/getProducts";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import "./../styles/pages.scss";
const DetailProduct = () => {
  const { id } = useParams();
  const [product, Setproduct] = useState({});
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    handleGetProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleGetProduct = async () => {
    try {
      const response = await GetProdoctById(id);
      Setproduct(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section">
      {isLoading ? <Spinner /> : <Product product={product} />}
    </section>
  );
};

export default DetailProduct;
