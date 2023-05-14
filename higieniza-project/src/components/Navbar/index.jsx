import React from "react";
import { navigationLinks } from "../../../utils/data";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <ul>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <Link>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
