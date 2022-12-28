import { useState } from "react";
import { TextField, FormControl } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import formbg from "../../img/Group 162805.png";
import ebook from "../../img/e-book.png";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import axios from "axios";
import { useSnackbar } from "notistack";

function EBookPage() {
  const [form, setForm] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const validNameRegEx = /^([^0-9]*)$/ ;
  const validEmailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const handleNameChange = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setForm({
      ...form,
      email: e.target.value,
    });
  };

  const handleMobileChange = (e) => {
    setForm({
      ...form,
      mobile: e,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (form?.name === undefined ||form?.name === "" || form?.email === undefined ||form?.email === "" || form?.mobile === undefined ||form?.mobile === "") {
      enqueueSnackbar("Please complete all fields.", {
        variant: "warning",
      });
    }
    else if (!form?.name?.match(validNameRegEx)) {
      enqueueSnackbar("Invalid name.", {
        variant: "warning",
      });
    } 
    else if (!form?.email?.match(validEmailRegEx)) {
      enqueueSnackbar("Invalid email.", {
        variant: "warning",
      });
    } 
    else if (!matchIsValidTel(form?.mobile)) {
      enqueueSnackbar("Invalid mobile number.", {
        variant: "warning",
      });
    } 
    else {
      try {
        axios
          .post("https://newraq.raqamyat.com/public/api/bookStore", form)
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar("E-book download link sent to your email!", {
                variant: "success",
              });
              setForm({
                name:"",
                email: "",
                mobile:""
              });
            } else {
              enqueueSnackbar("Something went wrong!", {
                variant: "error",
              });
            }
          });
      } catch (error) {
        enqueueSnackbar(error?.message, {
          variant: "error",
        });
      }
    }
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
                    value={form.name}
                    onChange={handleNameChange}
                  />
                  <TextField
                    id="email"
                    label="Your Mail"
                    variant="standard"
                    style={{ paddingBlockEnd: "20px" }}
                    value={form.email}
                    type="email"
                    onChange={handleEmailChange}
                  />
                  <MuiTelInput
                    id="phone"
                    label="Mobile Number"
                    variant="standard"
                    defaultCountry="EG"
                    value={form.mobile}
                    onChange={handleMobileChange}
                  />
                  <button type="submit" className="sbtn" onClick={submit}>
                    <div style={{ fontFamily: "Gotham" }}>Request E-book</div>
                  </button>
                </FormControl>
              </div>
            </div>
            <img className="ebook_img" src={ebook} alt="ebook" />
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default EBookPage;
