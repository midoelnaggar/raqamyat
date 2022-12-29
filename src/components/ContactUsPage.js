import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import {
  TextField,
  FormControl,
} from "@mui/material";
import formbg from "../img/Group 162805.png";
import img1 from "../img/Group 162642.png";
import img2 from "../img/Group 162643.png";
import img3 from "../img/Group 162641.png";
import map from "../img/Mask Group 3.png";
import PageHeader from "./PageHeader";
import Motion from "./Motion";



function ContactUsPage({ data }) {

  const { enqueueSnackbar } = useSnackbar();

  const validNameRegEx = /^([^0-9]*)$/ ;
  
  const validEmailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubjectChange = (e) => {
    setForm({
      ...form,
      subject: e.target.value,
    });
  };

  const handleMessageChange = (e) => {
    setForm({
      ...form,
      message: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (form?.name === undefined ||form?.name === "" || form?.email === undefined ||form?.email === "" || form?.subject === undefined ||form?.subject === "" || form?.message === undefined ||form?.message === "") {
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
    else {
    try {
      axios
        .post("https://newraq.raqamyat.com/public/api/contactStore", form)
        .then((res) => {
          if (res.status === 200) {
            enqueueSnackbar("Your message has been sen successfully", {
              variant: "success",
            });
            setForm({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          } else {
            enqueueSnackbar("Something went wrong!", {
              variant: "error",
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  };



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
                  <TextField
                    id="subject"
                    label="Subject"
                    variant="standard"
                    style={{ paddingBlockEnd: "20px" }}
                    value={form.subject}
                    onChange={handleSubjectChange}
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
                    value={form.message}
                    onChange={handleMessageChange}
                  />
                </FormControl>
                <div className="sbtn" onClick={submit}>
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
