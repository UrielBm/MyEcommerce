import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Electronic from "./pages/Electronic";
import Jewelery from "./pages/Jewelery";
import Clothes from "./pages/Clothes";
import DetailProduct from "./pages/DetailProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DetailCart from "./pages/DetailCart";
import Perfil from "./pages/Perfil";
import ShoppingHistory from "./pages/ShoppingHistory";
import NoMatch from "./pages/NoMatch";
const LayoutApp = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="electronicos" element={<Electronic />} />
        <Route path="joyeria" element={<Jewelery />} />
        <Route path="ropa" element={<Clothes />} />
        <Route path="producto/:id" element={<DetailProduct />} />
        <Route path="registro" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="mi_carrito" element={<DetailCart />} />
        <Route path="mi_perfil" element={<Perfil />} />
        <Route path="mi_historial" element={<ShoppingHistory />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default LayoutApp;
