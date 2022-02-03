import { useState } from "react";
import UseGetProducts from "./UseGetProducts";
const UseGetClothes = () => {
  const [select, Setselect] = useState(1);
  const { products, isLoading } = UseGetProducts("men's clothing");
  const { products: ropa, isLoading: loadingwoman } =
    UseGetProducts("women's clothing");

  const handleOnChange = (e) => {
    const { value } = e.target;
    Setselect(parseInt(value));
  };
  return {
    select,
    products,
    isLoading,
    ropa,
    loadingwoman,
    handleOnChange,
  };
};

export default UseGetClothes;
