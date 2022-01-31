import base from "./base";
export const getHistoryCart = (id) => {
  const response = base.get(`https://fakestoreapi.com/carts/user/${id}`);
  return response;
};
