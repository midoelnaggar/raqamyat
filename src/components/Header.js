import React from "react";
import logo from "../img/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="nav-list">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="contact-us-container">
        <img src={logo} />
      </div>
    </div>
  );
}

export default Header;
