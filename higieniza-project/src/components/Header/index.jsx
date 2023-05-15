import React from "react";
import Navbar from "../Navbar";
import { FacebookIcon } from "../../assets/facebook-logo.svg";

const Header = () => {
  return (
    <header className=" flex justify-between">
      <h2>LOGO HIGIENIZA</h2>
      <Navbar />
      <div>
        <img src={FacebookIcon} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
