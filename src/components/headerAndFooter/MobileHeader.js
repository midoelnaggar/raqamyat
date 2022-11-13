import "./MobileHeader.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import menu from "../../img/Hamburger_icon.svg";


function MobileHeader() {
  return (
    <div className="mobileHeader">
      <div className="mobileNavList">
        <img className="menubutton" src={menu} alt="menu" />
      </div>
      <div className="mobileLogo">
        <img alt="logo" className="logo-img" src={logo} />
      </div>
      <div className="mobile-contact-us">
        <button className="mobileCubtn">
          <Link to="#contact-us">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default MobileHeader;
