import React from "react";
import logo from "../assets/images/Image1.png";
import img from "../assets/images/Group 37.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <Link to="Mint">
        <div className="text">
          <img src={img} alt="" />
          <h4>Join Discord</h4>
        </div>
      </Link>
    </section>
  );
};

export default Header;
