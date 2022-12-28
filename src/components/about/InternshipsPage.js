import { useState } from "react";
import axios from "axios";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
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
  const [form, setForm] = useState({
    select_position: "",
    questionCC: null,
    questionDM: {
      ContentCreation: false,
      DigitalCopywriting: false,
      ContentWriting: false,
      CopyWriting: false,
      SocialMediaMarketing: false,
      SEO: false,
      StrategiesPlanning: false,
      EmailMarketing: false,
      CommunityManagement: false,
    },
    questionVP: {
      MotionGraphic: false,
      VideoEditing: false,
    },
    questionCD: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const {
    ContentCreation,
    DigitalCopywriting,
    ContentWriting,
    CopyWriting,
    SocialMediaMarketing,
    SEO,
    StrategiesPlanning,
    EmailMarketing,
    CommunityManagement,
  } = form.questionDM;
  const { MotionGraphic, VideoEditing } = form.questionDM;
  const navigate = useNavigate();

  const handleDMChange = (event) => {
    setForm({
      ...form,
      questionDM: {
        ...form.questionDM,
        [event.target.name]: event.target.checked,
      },
    });
  };
  const handleVPChange = (event) => {
    setForm({
      ...form,
      questionVP: {
        ...form.questionVP,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const handleInternClick = (clicked) => {
    document
      .querySelector(".internshipsThird")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    setForm({ ...form, select_position: clicked });
  };
  
  const validNameRegEx = /^([^0-9]*)$/ ;
  const validEmailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validPhoneRegEx = /^\d+$/;

  const submit = (e) => {
    console.log(form?.home_phone)
    e.preventDefault();
    if (
      form?.name === undefined ||
      form?.name === "" ||
      form?.email === undefined ||
      form?.email === "" ||
      form?.date === undefined ||
      form?.date === "" ||
      form?.current_address === undefined ||
      form?.current_address === "" ||
      form?.cell_number === undefined ||
      form?.cell_number === "" ||
      form?.current_level_of_education === undefined ||
      form?.current_level_of_education === "" ||
      form?.school_university === undefined ||
      form?.school_university === "" ||
      form?.gpa === undefined ||
      form?.gpa === "" ||
      form?.degree === undefined ||
      form?.degree === "" ||
      form?.major_subjects === undefined ||
      form?.major_subjects === ""
    ) {
      enqueueSnackbar("Please complete all required fields.", {
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
    else if (!form?.cell_number?.match(validPhoneRegEx)) {
      enqueueSnackbar("Invalid cell number.", {
        variant: "warning",
      });
    } 
    else if (!(form?.home_phone === undefined || form?.home_phone === "")) {
      if (!form?.home_phone?.match(validPhoneRegEx)) {
      enqueueSnackbar("Invalid home phone number.", {
        variant: "warning",
      });
    } }
    else if (
      form?.select_position === undefined ||
      form?.select_position === ""
    ) 
    {
      enqueueSnackbar("Please select the position.", {
        variant: "warning",
      });
    } else {
      try {
        axios
          .post("https://newraq.raqamyat.com/public/api/internship", form)
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar("Applied Successfuly!", {
                variant: "success",
              });
              setTimeout(() => {
                navigate("/");
              }, 1000);
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
    <>
      <Motion>
        <div className="jobsPage">
          <PageHeader
            title="Internships"
            breadcrumbs="Home / About Us / Careers / Internships"
          />
          <div className="jobsTop">
            <div className="jobs-left intern-left">
              <h1 style={{ maxWidth: "none" }}>
                <span>
                  Internships & Training for Digital Media & Production
                  <span />
                </span>
              </h1>
              <img className="mOnlyImg" src={image} alt="back" />
              <p className="lp">
                Accelerate your career with our internship programs. This is a
                great opportunity for a creative, resourceful individual to
                build skills and gain experience in Digital Marketing, Creative
                Design, Video Production, and Content Creation initiatives.
              </p>
              
              <button
                onClick={() => handleInternClick("Creative Design")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                className="lmbtn"
              >
                <div style={{ marginRight: "7px" }}>Apply Now</div>
                <img alt="ar" src={arrow} />
              </button>
            </div>
            <div className="jobs-right dOnly">
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
                <img className="mOnlyImg" src={image2} alt="image2" style={{ margin: 0 }} />
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
              <div className="sub-right dOnly" style={{ margin: 0 }}>
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
                    onClick={() => handleInternClick("Creative Design")}
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
                    onClick={() => handleInternClick("Digital Marketing")}
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
                    onClick={() => handleInternClick("Content Creation")}
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
                    onClick={() => handleInternClick("Video Production")}
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
                  className="textField"
                  id="name"
                  name="name"
                  label="Full Name"
                  variant="standard"
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  className="textField"
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
                  className="textField"
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
                  className="textField"
                  id="address"
                  name="current_address"
                  label="Current Address"
                  variant="standard"
                  value={form.current_address}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  className="textField"
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
                  className="textField"
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
                  className="textField"
                  id="education"
                  name="current_level_of_education"
                  label="Current Level of Education"
                  variant="standard"
                  value={form.current_level_of_education}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  className="textField"
                  id="school"
                  name="school_university"
                  label="School / University"
                  variant="standard"
                  value={form.school_university}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  className="textField"
                  id="gpa"
                  name="gpa"
                  label="GPA"
                  variant="standard"
                  value={form.gpa}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  className="textField"
                  id="degree"
                  name="degree"
                  label="Degree"
                  variant="standard"
                  value={form.degree}
                  onChange={handleChange}
                  style={{ margin: "20px", width: "500px" }}
                />
                <TextField
                  className="textField"
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
                    className="positionSelectLabel"
                    id="position-label"
                  >
                    Select Position
                  </InputLabel>
                  <Select
                    className="positionSelect"
                    id="select_position"
                    labelId="position-label"
                    name="select_position"
                    label="Select Position"
                    variant="standard"
                    value={form.select_position}
                    onChange={handleChange}
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
                {form?.select_position === "Creative Design" ? (
                  <div className="internshipQtns">
                    <FormControl fullWidth>
                      <FormLabel component="legend">
                        What design programs are you most comfortable with?
                      </FormLabel>
                      <TextField
                        fullWidth
                        className="textField"
                        id="questionCD"
                        name="questionCD"
                        variant="standard"
                        value={form.questionCD}
                        onChange={handleChange}
                      />
                    </FormControl>{" "}
                  </div>
                ) : form?.select_position === "Digital Marketing" ? (
                  <div className="internshipQtns">
                    <FormControl>
                      <FormLabel component="legend">
                        Please select the Digital Marketing skills that you
                        excel on:
                      </FormLabel>
                      <FormGroup className="internshipDMAnswars">
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={ContentCreation}
                              onChange={handleDMChange}
                              name="ContentCreation"
                            />
                          }
                          label="Content Creation"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={DigitalCopywriting}
                              onChange={handleDMChange}
                              name="DigitalCopywriting"
                            />
                          }
                          label="Digital Copywriting"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={ContentWriting}
                              onChange={handleDMChange}
                              name="ContentWriting"
                            />
                          }
                          label="ContentWriting"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={CopyWriting}
                              onChange={handleDMChange}
                              name="CopyWriting"
                            />
                          }
                          label="Copy Writing"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={SocialMediaMarketing}
                              onChange={handleDMChange}
                              name="SocialMediaMarketing"
                            />
                          }
                          label="Social Media Marketing"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={SEO}
                              onChange={handleDMChange}
                              name="SEO"
                            />
                          }
                          label="SEO"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={StrategiesPlanning}
                              onChange={handleDMChange}
                              name="StrategiesPlanning"
                            />
                          }
                          label="Strategies Planning"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={EmailMarketing}
                              onChange={handleDMChange}
                              name="EmailMarketing"
                            />
                          }
                          label="Email Marketing"
                        />
                        <FormControlLabel
                          className="internshipDMAnswar"
                          control={
                            <Checkbox
                              checked={CommunityManagement}
                              onChange={handleDMChange}
                              name="CommunityManagement"
                            />
                          }
                          label="Community Management"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                ) : form?.select_position === "Content Creation" ? (
                  <div className="internshipQtns">
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group">
                        Which language do you prefer in writing blogs / articles
                        in Internship? (In order of preference)
                      </FormLabel>
                      <RadioGroup
                        name="questionCC"
                        value={form?.questionCC}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Arabic"
                          control={<Radio />}
                          label="Arabic"
                        />
                        <FormControlLabel
                          value="English"
                          control={<Radio />}
                          label="English"
                        />
                        <FormControlLabel
                          value="Both"
                          control={<Radio />}
                          label="Both"
                        />
                      </RadioGroup>
                    </FormControl>{" "}
                  </div>
                ) : (
                  form?.select_position === "Video Production" && (
                    <div className="internshipQtns">
                      <FormControl>
                        <FormControl>
                          <FormLabel component="legend">
                            Please select the Digital Marketing skills that you
                            excel on:
                          </FormLabel>
                          <FormGroup className="internshipDMAnswars">
                            <FormControlLabel
                              className="internshipDMAnswar"
                              control={
                                <Checkbox
                                  checked={MotionGraphic}
                                  onChange={handleVPChange}
                                  name="MotionGraphic"
                                />
                              }
                              label="Motion Graphic"
                            />
                            <FormControlLabel
                              className="internshipDMAnswar"
                              control={
                                <Checkbox
                                  checked={VideoEditing}
                                  onChange={handleVPChange}
                                  name="VideoEditing"
                                />
                              }
                              label="Video Editing"
                            />
                          </FormGroup>
                        </FormControl>
                      </FormControl>{" "}
                    </div>
                  )
                )}
              </div>
              <button type="submit" className="sbtn" onClick={submit}>
                <div style={{ fontFamily: "Gotham" }}>Submit</div>
              </button>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}
