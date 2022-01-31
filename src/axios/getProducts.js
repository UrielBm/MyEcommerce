import base from "./base";

export const getAllProducts = () => {
  const response = base.get(`/products`);
  return response;
};
export const getProducts = (categoria, limit) => {
  if (limit) {
    const response = base.get(
      `/products/category/${categoria}/?limit=${limit}&sort=desc`
    );
    return response;
  } else {
    const response = base.get(`/products/category/${categoria}/?sort=desc`);
    return response;
  }
};
export const GetProdoctById = (id) => {
  const response = base.get(`https://fakestoreapi.com/products/${id}`);
  return response;
};
