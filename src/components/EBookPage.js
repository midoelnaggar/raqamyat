import "../styles/EBookPage.css";
import { useState } from "react";
import { TextField, FormControl } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import formbg from "../img/Group 162805.png";
import ebook from "../img/e-book.png";
import PageHeader from "./PageHeader";
import Motion from "./Motion";

function EBookPage({ data }) {
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <Motion>
      <div className="ebook_bg">
        <PageHeader title="E-Book" breadcrumbs="Home / About / News / E-book" />
        <div className="ebook_page">
          <div className="formandinfo">
            <div className="ebook">
              <div className="ebook_left">
                <div className="ebook_title">
                  TOP STATISTICS OF ECOMMERCE AND EPAYMENT INSIGHTS
                  <div className="ebook_version">MENA 2022-23</div>
                </div>
                <div className="ebook_subtitle">
                  Online businesses must keep up with the most recent eCommerce
                  and ePayment to remain vital and competitive. This report will
                  break down the top 2022-23 eCommerce and ePayment trends that
                  you need to know in Egypt and MENA.
                </div>
              </div>
              <div className="contactform">
                <img src={formbg} alt="bg" />
                <div className="head">
                  <h1>
                    <span>
                      GET YOUR FREE E-BOOK NOW!
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
                    name="phone"
                  />
                  <MuiTelInput
                    id="phone"
                    label="Mobile Number"
                    variant="standard"
                    defaultCountry="EG"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  <button className="sbtn">
                    <div>Download Now</div>
                  </button>
                </FormControl>
              </div>
              <div className="ebook_right"></div>
            </div>
            <img className="ebook_img" src={ebook} alt="ebook" />
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default EBookPage;
