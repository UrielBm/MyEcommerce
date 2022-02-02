import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
export const GetCategory = (category) => {
  const categories = {
    electronics: "electronicos",
    jewelery: "joyería",
    "men's clothing": "Ropa de hombre",
    "women's clothing": "Ropa de mujer",
  };
  return categories[category];
};

export const SetRatingStatus = (rate) => {
  let status;
  if (rate < 3) {
    status = "status-bad";
  } else if (rate >= 3 && rate < 4) {
    status = "status-medium";
  } else {
    status = "status-good";
  }
  return status;
};

export const GoodAlert = (title, text, method) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "success",
    confirmButtonText: "aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      method();
    }
  });
};
export const WarningAlert = (title, text, method) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "warning",
    confirmButtonText: "aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      method();
    }
  });
};
export const SuccesAddProduct = () => {
  Swal.fire({
    icon: "success",
    title: "Agregado correctamente",
    text: "El articulo se agrego correctamente al carrito de compras",
    showConfirmButton: false,
    timer: 1500,
  });
};
export const BadAlert = (title, text) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
};
export const AddProduct = (cart, newproduct) => {
  if (cart.length === 0) {
    return [...cart, newproduct];
  } else {
    const filter = cart.filter((product) => product.id === newproduct.id);
    if (filter.length === 0) {
      return [...cart, newproduct];
    } else {
      const NewProduct = filter[0];
      NewProduct.cantidad = NewProduct.cantidad + 1;
      NewProduct.totalPrice = NewProduct.price * NewProduct.cantidad;
      const ArrayDuplicate = [...cart, NewProduct];
      const NewArray = ArrayDuplicate.filter(
        (product) => product.id !== NewProduct.id
      );
      return [...NewArray, NewProduct];
    }
  }
};
export const SetTotal = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].totalPrice;
  }
  return total;
};

export const deleteProduct = (cart, id) => {
  const newCart = cart.filter((product) => product.id !== id);
  return newCart;
};
