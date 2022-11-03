import  './Header.css'
import { useLocation, Link } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  let location = useLocation();

  return (
    <div className="header">
      <div className="navList">
        <Link
          className={`${
            location?.hash === "#home" ? "activeLink" : "inactiveLink"
          } `}
          to="#home"
        >
          Home
        </Link>
          <span className="dot"></span>
        <Link
          className={`${
            location?.hash === "#about" ? "activeLink" : "inactiveLink"
          } `}
          to="#about"
        >
          About
        </Link>
          <span className="dot"></span>
        <Link
          className={`${
            location?.hash === "#services" ? "activeLink" : "inactiveLink"
          } `}
          to="#services"
        >
          Services
        </Link>
          <span className="dot"></span>
        <Link
          className={`${
            location?.hash === "#blog" ? "activeLink" : "inactiveLink"
          } `}
          to="#blog"
        >
          Blog
        </Link>
          <span className="dot"></span>
        <Link
          className={`${
            location?.hash === "#media" ? "activeLink" : "inactiveLink"
          } `}
          to="#media"
        >
          Media
        </Link>
      </div>
      <div className="logo">
        <img alt="logo" className="logo-img" src={logo} />
      </div>
      <div className="contact-us">
        <button className="cubtn"><Link to="#contact-us" >Contact Us</Link></button>
      </div>
    </div>
  );
}

export default Header;
