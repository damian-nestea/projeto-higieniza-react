import React from "react";
import { navigationLinks } from "../../../utils/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log(navigationLinks);

  return (
    <ul>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <Link></Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
