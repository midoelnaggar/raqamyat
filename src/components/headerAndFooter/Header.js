import "../../styles/Header.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Header() {
  let location = useLocation();
  return (
    <div className="header">
      <div className="navList">
        <Link
          className={`${
            location?.pathname === "/" ? "activeLink" : "inactiveLink"
          } `}
          to="/"
        >
          Home
        </Link>
        <span className="dot"></span>
        <Link
          className={`${
            location?.pathname.startsWith("/about-us") ? "activeLink" : "inactiveLink"
          }  aboutbtn`}
          to="/about-us"
        >
          About
          <div className="aboutmenu">
            <div className="smcontent">
              <div className="mencol">
                <div className="menti">Our Company</div>
                <div>
                  <Link to="/about-us">Who we are?</Link>
                </div>
                <div>
                  <Link to="/about-us/our-company/stakeholders">Stakeholders </Link>
                </div>
                <div>
                  <Link to="/">Our Partners </Link>
                </div>
                <div>
                  <Link to="/">Successful Cases </Link>
                </div>
                <div>
                  <Link to="/">Contact Us </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">News</div>
                <div>
                  <Link to="/">Press </Link>
                </div>
                <div>
                  <Link to="/">Events </Link>
                </div>
                <div>
                  <Link to="/">Webinars </Link>
                </div>
                <div>
                  <Link to="/">Projects </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Careers</div>
                <div>
                  <Link to="/">Jobs </Link>
                </div>
                <div>
                  <Link to="/">Internships </Link>
                </div>
              </div>
            </div>
          </div>  
        </Link>
        <span className="dot"></span>
        <Link
          className={`${
            location?.pathname === "/services" ? "activeLink" : "inactiveLink"
          }  servicesbtn`}
          to="/services"
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
                  <Link to="/">Online Stores Development </Link>
                </div>
                <div>
                  <Link to="/">Consultation & Support </Link>
                </div>
                <div>
                  <Link to="/">Outsourcing </Link>
                </div>
                <div>
                  <Link to="/">E-Payment Integrations </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Operations</div>
                <div>
                  <Link to="/">Operations Solutions </Link>
                </div>
                <div>
                  <Link to="/">Technical Support Agents </Link>
                </div>
                <div>
                  <Link to="/">Projects Operations (BOT) </Link>
                </div>
                <div>
                  <Link to="/">Logistics Management </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Marketing</div>
                <div>
                  <Link to="/">Content Marketing </Link>
                </div>
                <div>
                  <Link to="/">Marketing Strategy </Link>
                </div>
                <div>
                  <Link to="/">Market Analysis </Link>
                </div>
                <div>
                  <Link to="/">Video Production </Link>
                </div>
              </div>
              <div className="mencol">
                <div className="menti"></div>
                <div>
                  <Link to="/">Content Marketing </Link>
                </div>
                <div>
                  <Link to="/">Product Development </Link>
                </div>
                <div>
                  <Link to="/">Integrated Marketing </Link>
                </div>
                <div>
                  <Link to="/">Outsourcing </Link>
                </div>
              </div>
            </div>
            <div className="smcontent">
              <div className="mencol">
                <div className="menmti">Business Type</div>
              </div>
              <div className="menlcol">
                <div>
                  <Link to="/">Retail E-Commerce </Link>
                </div>
                <div>
                  <Link to="/">FMCG & Restaurants E-Commerce </Link>
                </div>
                <div>
                  <Link to="/">Healthcare E-Commerce </Link>
                </div>
                <div>
                  <Link to="/">Education E-Commerce </Link>
                </div>
                <div>
                  <Link to="/">E-Commerce for Special Projects </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <span className="dot"></span>
        <Link
          className={`${
            location?.pathname === "/blog" ? "activeLink" : "inactiveLink"
          } `}
          to="/blog"
        >
          Blog
        </Link>
        <span className="dot"></span>
        <Link
          className={`${
            location?.pathname === "/media" ? "activeLink" : "inactiveLink"
          } `}
          to="/media"
        >
          Media
        </Link>
      </div>
      <div className="logo">
        <Link to="/">
        <img alt="logo" className="logo-img" src={logo} />
        </Link>
      </div>
      <div className="contact-us">
        <button className="cubtn">
          <Link to="/contact-us">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
