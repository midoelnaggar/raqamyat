import Motion from "../Motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { TextField, FormControl } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import formbg from "../../img/Group 162805.png";
import moment from "moment";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PageHeader from "../PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "../../img/avatar.png";
import fallback from "../../img/fallbackWebinar.jpg";

function WebinarPage({ setLoading }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      first_name: "",
      email: "",
      mobile: "",
      job_title: "",
      webinar_id: data?.id,
    });
  }, [data]);

  const { enqueueSnackbar } = useSnackbar();
  const validEmailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://newraq.raqamyat.com/public/api/webinars"
      );
      if ((await res.status) === 200) {
        setData(
          await res.data?.data?.filter((webinar) => {
            return webinar.id == id ? true : false;
          })[0]
        );
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleNameChange = (e) => {
    setForm({
      ...form,
      first_name: e.target.value,
    });
  };

  const handleJobChange = (e) => {
    setForm({
      ...form,
      job_title: e.target.value,
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
    if (form?.first_name === undefined ||form?.first_name === "" || form?.job_title === undefined ||form?.job_title === "" || form?.email === undefined ||form?.email === "" || form?.mobile === undefined ||form?.mobile === "") {
      enqueueSnackbar("Please complete all fields.", {
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
        .post("https://newraq.raqamyat.com/public/api/webinarStore", form)
        .then((res) => {
          if (res.status === 200) {
            enqueueSnackbar("Your spot is reserved successfully!", {
              variant: "success",
            });
            setForm({
              first_name:"",
              email: "",
              mobile:"",
              job_title:"",
              webinar_id: data?.id
            });
          } else {
            enqueueSnackbar("Something went wrong!", {
              variant: "error",
            });
          }
        });
    } catch (err) {
      enqueueSnackbar(err?.message, {
        variant: "error",
      });
    }
  }
  };

  return (
    <Motion>
      <div className="webinar_page">
        <div className="head_bg">
          <PageHeader
            title="Webinars"
            breadcrumbs={`Home / About / Webinars / ${data?.name}`}
          />
        </div>
        <div className="page_content">
          <div
            onClick={() => {
              navigate(-1, { replace: true });
            }}
            className="webinar_back"
          >
            <ArrowBack />
            <div>Back</div>
          </div>
          <div className="webinar_date">
            <DateRangeIcon fontSize="small" style={{ opacity: 0.5 }} />
            <div>
              {moment(data?.date, "DD-MM-YYYY").format("DD MMM[.] YYYY")}
            </div>
            <div>|</div>
            <div>
              {moment(data?.date, "DD-MM-YYYY HH:mm:SS").format("hh[:]mm A")}
            </div>
          </div>
          <div className="webinar_zoom">Free Zoom Webinar</div>
          <div className="webinar_title">{data?.name}</div>
          <div
            style={{
              color: "#949494",
              fontSize: "13px",
              fontWeight: 500,
              paddingTop: "15px",
              paddingBottom: "5px",
            }}
          >
            Hosted by
          </div>
          <div style={{ display: "flex" }}>
            <img src={avatar} alt="avatar" style={{width:"24px",height:"24px",borderRadius:"8px"}} />            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "spaceBetween",
                paddingLeft: "10px",
              }}
            >
              <div className="webinar_speaker">{data?.speker}</div>
              <div className="speaker_position">{data?.position}</div>
              <div className="speaker_company">{data?.company}</div>
            </div>
          </div>
          <div
          className="webinarImgAndForm"
            style={{
              display: "flex",
              paddingTop: "50px",
              alignItems: "center",
            }}
          >
            <img
              onError={(e) => (e.target.src = fallback)}
              className="webinarCoverImage"
              src={data?.image}
              alt={data?.name}
            />
            <div className="contactform">
              <img src={formbg} alt="bg" />
              <div className="contactformHead">
                <h1>
                  <span>
                    {moment(data?.date, "DD-MM-YYYY HH:mm:SS") < Date.now()
                      ? `Get Recordings`
                      : `Reserve a spot`}
                    <span />
                  </span>
                </h1>
              </div>
              <FormControl fullWidth>
                <TextField
                  id="name"
                  label="Your Name"
                  variant="standard"
                  style={{ paddingBlockStart: 0, paddingBlockEnd: "20px" }}
                  value={form.first_name}
                  onChange={handleNameChange}
                />
                <TextField
                  id="job"
                  label="Job Title"
                  variant="standard"
                  style={{ paddingBlockEnd: "20px" }}
                  value={form.job_title}
                  onChange={handleJobChange}
                />
                <TextField
                  id="email"
                  label="Your Mail"
                  variant="standard"
                  style={{ paddingBlockEnd: "20px" }}
                  value={form.email}
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
                  <div>Submit</div>
                </button>
              </FormControl>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </div>
    </Motion>
  );
}

export default WebinarPage;
