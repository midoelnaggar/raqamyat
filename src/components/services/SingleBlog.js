import Motion from "../Motion";
import moment from "moment";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PageHeader from "../PageHeader";
import { useNavigate, useHref } from "react-router-dom";
import avatar from "../../img/avatar.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function SingleBlog({setLoading}) {
  const [data, setData] = useState();
  const href = useHref().split("/");
  const slug = href[href?.length - 1]
  const navigate = useNavigate();
  useEffect(() => {
     const getBlog = async ()=> {
      const res = await axios.get(`https://newraq.raqamyat.com/public/api/jobs/show?slug=${slug}`)
      setData(await res.data.data);
    }
    getBlog();
  }, [slug]);
  return (
    <Motion>
      <div className="webinar_page">
        <div className="head_bg">
          <PageHeader
            title="Blog"
            breadcrumbs={`Home / Blog / ${data?.title}`}
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
          </div>
          <div className="webinar_title">{data?.title}</div>
          <div
            style={{
              color: "#949494",
              fontSize: "13px",
              fontWeight: 500,
              paddingTop: "15px",
              paddingBottom: "5px",
            }}
          >
            Written by
          </div>
          <div style={{ display: "flex" }}>
            <img src={data?.auther_image ? (data?.auther_image !== "https://newraq.raqamyat.com/public/storage/-" ? data?.auther_image:avatar) :avatar} alt="avatar"></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "spaceBetween",
                paddingLeft: "10px",
              }}
            >
              <div className="webinar_speaker">{data?.auther_name ? (data?.auther_name !== "-" ? data?.auther_name:"Raqamyat") :"Raqamyat"}</div>
              <div className="speaker_position">{data?.position}</div>
              <div className="speaker_company">{data?.company}</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "50px",
              alignItems: "center",
            }}
          ></div>
          <div dangerouslySetInnerHTML={{__html: data?.description}} />            
        </div>
      </div>
    </Motion>
  );
}

