import { useState, useRef } from "react";
import "../../styles/JobsPage.css";
import axios from "axios";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import { Link } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";
import image from "../../img/Internships.png";
import image2 from "../../img/Internships2.png";
import shapes3 from "../../img/shapes3.png";
import intern1 from "../../img/01.png";
import intern2 from "../../img/02.png";
import intern3 from "../../img/03.png";
import intern4 from "../../img/04.png";
import { useSnackbar } from "notistack";

export default function InternshipsPage() {
  const positionRef = useRef("");
  const [form, setForm] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleInternClick = () => {
document.querySelector(".internshipsThird ").scrollIntoView({behavior:"smooth",block:"start"})
  };

  const submit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("https://newraq.raqamyat.com/public/api/internship", form)
        .then((res) => {
          if (res.status === 200) {
            enqueueSnackbar("Applied Successfuly!", {
              variant: "success",
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
  };

  return (
    <>
      <Motion>
        <div className="jobsPage">
          <PageHeader
            title="Internships"
            breadcrumbs="Home / About Us / Careers / Internships"
          />
          <div className="jobsTop">
            <div className="jobs-left">
              <h1 style={{ maxWidth: "none" }}>
                <span>
                  Internships & Training for Digital Media & Production <span />
                </span>
              </h1>
              <p className="lp">
                Accelerate your career with our internship programs. This is a
                great opportunity for a creative, resourceful individual to
                build skills and gain experience in Digital Marketing, Creative
                Design, Video Production, and Content Creation initiatives.
              </p>
              <button className="lmbtn">
                <Link to="">
                  Apply Now <img alt="ar" src={arrow} />
                </Link>
              </button>
            </div>
            <div className="jobs-right">
              <img src={image} alt="back" />
            </div>
          </div>
          <div className="sub_container sub_container_osd">
            <div className="sub_inverted" style={{ padding: 0 }}>
              <div className="sub-left">
                <h1>
                  <span>
                    Get A Head Start In Your Career
                    <span />
                  </span>
                </h1>
                <p className="lp">
                  Become an Intern or Trainee in Raqamyat and enjoy building the
                  foundation of your career. Begin your professional journey of
                  practical experience and understanding of business practices,
                  environment, and process. We look forward to assisting you
                  with our professional career goals!
                </p>
                <button className="lmbtn">
                  <Link to="/contact-us">
                    Let’s Talk! <img alt="ar" src={arrow} />
                  </Link>
                </button>
              </div>
              <div className="sub-right" style={{ margin: 0 }}>
                <img src={image2} alt="image2" style={{ margin: 0 }} />
              </div>
            </div>
          </div>
          <div className="internshipsSecond">
            <img src={shapes3} alt="shapes" />
            <div className="jobs-left">
              <h1>
                <span>
                  Key Positions For Our Internships & Training <span />
                </span>
              </h1>
              <p className="lp">
                We’re looking for motivated and forward-thinking Interns &
                Trainees, who are eager to work in a fast-paced environment to
                join our team and help us deliver E-Commerce Solutions in the
                below fields.
              </p>
              <div className="internshipsList">
                <div>
                  <img src={intern1} alt="intetn1" />
                  <p>Creative Design</p>
                  <button
                    onClick={handleInternClick}
                    className="anbtn"
                  >
                    <div>
                      Apply Now <img alt="ar" src={arrow} />
                    </div>
                  </button>
                </div>
                <div>
                  <img src={intern2} alt="intetn2" />
                  <p>Digital Marketing</p>
                  <button
                    onClick={handleInternClick}
                    className="anbtn"
                  >
                    <div>
                      Apply Now <img alt="ar" src={arrow} />
                    </div>
                  </button>
                </div>
                <div>
                  <img src={intern3} alt="intetn3" />
                  <p>Content Creation</p>
                  <button
                  name="Content Creation"
                    onClick={handleInternClick}
                    className="anbtn"
                  >
                    <div>
                      Apply Now <img alt="ar" src={arrow} />
                    </div>
                  </button>
                </div>
                <div>
                  <img src={intern4} alt="intetn4" />
                  <p>Video Production</p>
                  <button
                    onClick={handleInternClick}
                    className="anbtn"
                  >
                    <div>
                      Apply Now <img alt="ar" src={arrow} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="internshipsThird">
            <div className="jobs-left">
              <h1>
                <span>
                  Application <span />
                </span>
              </h1>
              <div className="internshipsForm">
                <img src={shapes3} alt="shapes" />
                <TextField
                  id="name"
                  name="name"
                  label="Full Name"
                  variant="standard"
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="date"
                  name="date"
                  label="Date of Birth"
                  variant="standard"
                  value={form.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  variant="standard"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="address"
                  name="current_address"
                  label="Current Address"
                  variant="standard"
                  value={form.current_address}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="mobile"
                  label="Cell Number"
                  name="cell_number"
                  variant="standard"
                  value={form.cell_number}
                  onChange={handleChange}
                  type="tel"
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="phone"
                  name="home_phone"
                  label="Home Phone (If any)"
                  variant="standard"
                  value={form.home_phone}
                  onChange={handleChange}
                  type="tel"
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="education"
                  name="current_level_of_education"
                  label="Current Level of Education"
                  variant="standard"
                  value={form.current_level_of_education}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="school"
                  name="school_university"
                  label="School / University"
                  variant="standard"
                  value={form.school_university}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="gpa"
                  name="gpa"
                  label="GPA"
                  variant="standard"
                  value={form.gpa}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="degree"
                  name="degree"
                  label="Degree"
                  variant="standard"
                  value={form.degree}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  id="major-subjects"
                  name="major_subjects"
                  label="Major Subjects"
                  variant="standard"
                  value={form.major_subjects}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <FormControl>
                  <InputLabel
                    id="position-label"
                    style={{ paddingLeft: "8px", marginTop: "20px" }}
                  >
                    Select Position
                  </InputLabel>
                  <Select
                    inputRef={positionRef}
                    id="position"
                    labelId="position-label"
                    name="select_position"
                    label="Select Position"
                    variant="standard"
                    value={form.select_position}
                    onChange={handleChange}
                    style={{
                      margin: "20px",
                      width: "500px",
                      marginTop: "36px",
                    }}
                  >
                    <MenuItem value="Creative Design">Creative Design</MenuItem>
                    <MenuItem value="Digital Marketing">
                      Digital Marketing
                    </MenuItem>
                    <MenuItem value="Content Creation">
                      Content Creation
                    </MenuItem>
                    <MenuItem value="Video Production">
                      Video Production
                    </MenuItem>
                  </Select>
                </FormControl>
                <button type="submit" className="sbtn" onClick={submit}>
                  <div style={{ fontFamily: "Gotham" }}>Submit</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}
