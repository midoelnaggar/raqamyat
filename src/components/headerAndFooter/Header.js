import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Header() {
  let location = useLocation();

  return (
    <div className="header">
      <div className="navList">
        <Link
          className={`${
            location?.hash === "" ? "activeLink" : "inactiveLink"
          } `}
          to=""
        >
          Home
        </Link>
        <span className="dot"></span>
        <Link
          className={`${
            location?.hash === "#about" ? "activeLink" : "inactiveLink"
          }  aboutbtn`}
          to="#about"
        >
          About
          <div className="aboutmenu">
            <div className="smcontent">
              <div className="mencol">
                <div className="menti">Our Company</div>
                <div>
                  <a href="/">Who we are? </a>
                </div>
                <div>
                  <a href="/">Stakeholders </a>
                </div>
                <div>
                  <a href="/">Our Partners </a>
                </div>
                <div>
                  <a href="/">Successful Cases </a>
                </div>
                <div>
                  <a href="/">Contact Us </a>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">News</div>
                <div>
                  <a href="/">Press </a>
                </div>
                <div>
                  <a href="/">Events </a>
                </div>
                <div>
                  <a href="/">Webinars </a>
                </div>
                <div>
                  <a href="/">Projects </a>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Careers</div>
                <div>
                  <a href="/">Jobs </a>
                </div>
                <div>
                  <a href="/">Internships </a>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <span className="dot"></span>
        <Link
          className={`${
            location?.hash === "#services" ? "activeLink" : "inactiveLink"
          }  servicesbtn`}
          to="#services"
        >
          Services
          <div className="servicesmenu">
            <div className="smcontent">
              <div className="mencol">
                <div className="menmti">Solutions</div>
              </div>
              <div className="mencol">
                <div className="menti">Development</div>
                <div>
                  <a href="/">Online Stores Development </a>
                </div>
                <div>
                  <a href="/">Consultation & Support </a>
                </div>
                <div>
                  <a href="/">Outsourcing </a>
                </div>
                <div>
                  <a href="/">E-Payment Integrations </a>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Operations</div>
                <div>
                  <a href="/">Operations Solutions </a>
                </div>
                <div>
                  <a href="/">Technical Support Agents </a>
                </div>
                <div>
                  <a href="/">Projects Operations (BOT) </a>
                </div>
                <div>
                  <a href="/">Logistics Management </a>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Marketing</div>
                <div>
                  <a href="/">Content Marketing </a>
                </div>
                <div>
                  <a href="/">Marketing Strategy </a>
                </div>
                <div>
                  <a href="/">Market Analysis </a>
                </div>
                <div>
                  <a href="/">Video Production </a>
                </div>
              </div>
              <div className="mencol">
                <div className="menti"></div>
                <div>
                  <a href="/">Content Marketing </a>
                </div>
                <div>
                  <a href="/">Product Development </a>
                </div>
                <div>
                  <a href="/">Integrated Marketing </a>
                </div>
                <div>
                  <a href="/">Outsourcing </a>
                </div>
              </div>
            </div>
            <div className="smcontent">
              <div className="mencol">
                <div className="menmti">Business Type</div>
              </div>
              <div className="menlcol">
                <div>
                  <a href="/">Retail E-Commerce </a>
                </div>
                <div>
                  <a href="/">FMCG & Restaurants E-Commerce </a>
                </div>
                <div>
                  <a href="/">Healthcare E-Commerce </a>
                </div>
                <div>
                  <a href="/">Education E-Commerce </a>
                </div>
                <div>
                  <a href="/">E-Commerce for Special Projects </a>
                </div>
              </div>
            </div>
          </div>
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
        <button className="cubtn">
          <Link to="#contact-us">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
