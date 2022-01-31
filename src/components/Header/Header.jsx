import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Nav from "../Nav";

import logo from "../../assets/logo.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="wrapper-logo">
          <img src={logo} className="logo" alt="logo" />
          <Link className="title" to="/">
            Tower Store
          </Link>
        </div>
        <div className="wrapper-hamburguer">
          <Hamburger
            color="#323232"
            duration={1}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div className="wrapperDesktopkNav">
          <Nav />
        </div>
      </header>
      {isOpen && (
        <div className="wrapperNav">
          <Nav />
        </div>
      )}
    </>
  );
};

export default Header;
