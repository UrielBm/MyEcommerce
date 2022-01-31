import base from "./base";

export const registerUser = (user) => {
  const response = base.post(`/users`, user);
  return response;
};
export const loginUser = (user) => {
  const response = base.post(`/auth/login`, user);
  return response;
};
export const getMyUser = () => {
  const response = base.get(`/users/1`);
  return response;
};

export const updating = (user, id) => {
  const response = base.put(`users/${id}`, user);
  return response;
};
