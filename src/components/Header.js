import React from "react";
import logo from "../img/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="nav-list">
        <a href="/home">Home</a>
        <p>{" ‧ "}</p>
        <a href="/about">About</a>
        <p>{" ‧ "}</p>
        <a href="/services">Services</a>
        <p>{" ‧ "}</p>
        <a href="/blog">Blog</a>
        <p>{" ‧ "}</p>
        <a href="/media">Media</a>
      </div>
      <div className="logo">
        <img className="logo-img" src={logo} />
      </div>
      <div className="contact-us">
        <button className="btn">Contact Us</button>
      </div>
    </div>
  );
}

export default Header;
