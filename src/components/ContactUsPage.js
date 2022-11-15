import "../styles/ContactUsPage.css";
import { TextField, FormControl } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Subscribe from "./homePage/Subscribe";
import formbg from "../img/Group 162805.png";
import img1 from "../img/Group 162642.png";
import img2 from "../img/Group 162643.png";
import img3 from "../img/Group 162641.png";
import map from "../img/Mask Group 3.png";

function ContactUsPage() {
  return (
    <motion.div
      className="contact_us_page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.18 } }}
    >
      <div className="page_header">
        <div className="page_title"><h1>Contact Us</h1></div>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <div>/</div>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className="formandinfo">
        <div className="contactform">
          <img src={formbg} alt="bg" />
          <div className="head">
            <h1>
              Send us
              <span>
                {" "}
                message
                <span />
              </span>
            </h1>
          </div>
          <FormControl fullWidth>
            <TextField
              id="name"
              label="Your Name"
              variant="standard"
              style={{ paddingBlockEnd: "20px" }}
              sx={{ fontFamily: "Gotham" }}
            />
            <TextField
              id="email"
              label="Your Mail"
              variant="standard"
              style={{ paddingBlockEnd: "20px" }}
            />
            <TextField
              id="subject"
              label="Subject"
              variant="standard"
              style={{ paddingBlockEnd: "20px" }}
            />
            <TextField
              id="message"
              label="Message"
              variant="standard"
              style={{
                paddingBlockEnd: "20px",
                fontFamily: "Gotham",
                fontWeight: 800,
              }}
              multiline
              minRows={6}
              maxRows="6"
            />
          </FormControl>
          <div className="sbtn">
            <div>Submit</div>
          </div>
        </div>
        <div className="info">
          <div className="head">
            <h1>
              Don’t hesitate to contact us for any{" "}
              <span>
                {" "}
                information
                <span />
              </span>
            </h1>
          </div>
          <div className="contact">
            <img src={img1} alt="loc" />
            <div>
              <div>Our Location</div>
              <a
                href="https://goo.gl/maps/PxFQEiH1qgMzuHfu8"
                target="_blank"
                rel="noopener noreferrer"
              >
                1D/4 AlNasr Road New Maadi Cairo, Cairo 11728, EG
              </a>
            </div>
          </div>
          <div className="contact">
            <img src={img2} alt="ema" />
            <div>
              <div>Our Email</div>
              <a
                href="mailto:info@raqamyat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@raqamyat.com
              </a>
            </div>
          </div>
          <div className="contact">
            <img src={img3} alt="tel" />
            <div>
              <div>Our Telephone</div>
              <a
                href="tel:+201050859295"
                target="_blank"
                rel="noopener noreferrer"
              >
                00201050859295
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://goo.gl/maps/PxFQEiH1qgMzuHfu8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={map} className="map" alt="map" />
      </a>
      <Subscribe />
    </motion.div>
  );
}

export default ContactUsPage;
