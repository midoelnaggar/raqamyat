import "../styles/ContactUsPage.css";

import { TextField, FormControl } from "@mui/material";
import formbg from "../img/Group 162805.png";
import img1 from "../img/Group 162642.png";
import img2 from "../img/Group 162643.png";
import img3 from "../img/Group 162641.png";
import map from "../img/Mask Group 3.png";
import PageHeader from "./PageHeader";
import Motion from "./Motion";

function ContactUsPage({ data }) {
  return (
    <Motion>
      <div className="cupbg">
      <a
        href="https://goo.gl/maps/PxFQEiH1qgMzuHfu8"
        target="_blank"
        rel="noopener noreferrer"
  >
        <img src={map} className="map" alt="map" />
      </a>
      <PageHeader title="Contact Us" breadcrumbs="Home  /  Contact Us" />
      <div className="cupage">
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
                  {data?.address}
                </a>
              </div>
            </div>
            <div className="contact">
              <img src={img2} alt="ema" />
              <div>
                <div>Our Email</div>
                <a
                  href={`mailto:${data?.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.email}
                </a>
              </div>
            </div>
            <div className="contact">
              <img src={img3} alt="tel" />
              <div>
                <div>Our Telephone</div>
                <a
                  href={`tel:${data?.mobile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.mobile}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Motion>
  );
}

export default ContactUsPage;
