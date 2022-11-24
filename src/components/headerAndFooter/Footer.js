import "../../styles/Footer.css";
import moment from "moment/moment";
import Subscribe from "../homePage/Subscribe";
import logo from "../../img/logo.png";
import li from "../../img/Mask Group 5.png";
import fb from "../../img/Mask Group 6.png";
import tw from "../../img/Mask Group 7.png";
import ig from "../../img/Mask Group 11.png";
import yt from "../../img/Mask Group 10.png";
import em from "../../img/Path 83682.png";
import ph from "../../img/phone.png";
import lo from "../../img/Group 162676.png";


function Footer() {
  return (
    <>
    <Subscribe />
    <div className="footer">
      <div className="fourcols">
        <div>
          <img className="footer_logo" src={logo} alt="logo" />
          <p>
            Raqamyat is an Egyptian multimillion Fintech shareholding company
            licensed <a href="/">Read More</a>
          </p>
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/company/raqamyat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={li} alt="li" />
            </a>
            <a
              href="https://www.facebook.com/RAQAMYAT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="fb" />
            </a>
            <a
              href="https://twitter.com/raqamyat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tw} alt="tw" />
            </a>
            <a
              href="https://www.instagram.com/raqamyatfintech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="ig" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCdxPkZ0IIecEANDF6NHD66g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yt} alt="yt" />
            </a>
          </div>
        </div>
        <div>
          <span className="footertitle">
            About Us
            <span />
          </span>
          <div className="links">
            <div>
              <a href="/">Blog</a>
            </div>
            <div>
              <a href="/">Media</a>
            </div>
            <div>
              <a href="/">Careers</a>
            </div>
            <div>
              <a href="/">Our Company</a>
            </div>
            <div>
              <a href="/">News</a>
            </div>
          </div>
        </div>
        <div>
          <span className="footertitle">
            Services
            <span />
          </span>
          <div className="links">
            <div>
              <a href="/">Development</a>
            </div>
            <div>
              <a href="/">Operations</a>
            </div>
            <div>
              <a href="/">Marketing</a>
            </div>
          </div>
        </div>
        <div>
          <span className="footertitle">
            Contact Us
            <span />
          </span>
          <div className="links">
            <div>
              <img src={em} alt="em" className="em" />
              <a href="mailto:info@raqamyat.com">info@raqamyat.com</a>
            </div>
            <div>
              <img src={ph} alt="ph" />
              <a href="tel:+201050859295">00201050859295</a>
            </div>
            <div>
              <img src={lo} alt="lo" />
              <a
                href="https://goo.gl/maps/PxFQEiH1qgMzuHfu8"
                target="_blank"
                rel="noopener noreferrer"
              >
                1D/4 AlNasr Road New Maadi,
                <br />
                Cairo 11728, EG
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="cw">
        <div>Copyright © {moment().year()} All Rights Reserved</div>
        <span>
          <a
            href="https://raqamyat.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          <a
            href="https://raqamyat.com/policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
        </span>
      </div>
    </div>
    </>
  );
}

export default Footer;
