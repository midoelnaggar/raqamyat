import Motion from "../Motion";
import moment from "moment";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PageHeader from "../PageHeader";
import { useNavigate, useHref, useParams } from "react-router-dom";
import avatar from "../../img/avatar.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import fallback from "../../img/fallbackSingleBlog.png";

export default function SingleBlog({ setLoading, setSlug }) {
  const [data, setData] = useState();
  const {slug} = useParams() 
  const navigate = useNavigate();
  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(
        `https://newraq.raqamyat.com/public/api/jobs/show?slug=${slug}`
      );
      setData(await res.data.data);
      setLoading(false);
    };
    getBlog();
    setSlug(slug)
  }, [slug, setLoading]);
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
              navigate(-1);
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

          <div style={{ display: "flex", paddingTop: "20px" }}>
            <img
              onError={(e) => (e.target.src = avatar)}
              src={data?.auther_image}
              alt="avatar"
              style={{ width: "54px", height: "54px", borderRadius: "15px" }}
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
              }}
            >
              <div
                style={{
                  color: "#333333",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Written by
              </div>
              <div
                style={{
                  color: "#333333",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {data?.auther_name
                  ? data?.auther_name !== "-"
                    ? data?.auther_name
                    : "Raqamyat"
                  : "Raqamyat"}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingBlock: "50px",
              alignItems: "center",
            }}
          >
            <img
              onError={(e) => (e.target.src = fallback)}
              src={data?.image}
              alt="blogImage"
              className="blogImage"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </div>
    </Motion>
  );
}
