import PageHeader from "../PageHeader";
import Motion from "../Motion";
import { useNavigate,useParams } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";
import { useEffect } from "react";
function JobPage({data ,setApiUrl}) {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  useEffect(() => {
    setApiUrl("https://newraq.raqamyat.com/public/api/jobs/show?slug="+slug )
  }, [slug,setApiUrl])
  

  return (
    <Motion>
      <div className="jobPage">
        <PageHeader
          title="Jobs"
          breadcrumbs={`Home / About Us / Careers / Jobs / ${data?.title}`}
        />
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
          <div className="page_content">
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </div>
          <button className="lmbtn">
                <a href="mailto:hr@raqamyat.com">
                  Apply Now <img alt="ar" src={arrow} />
                </a>
              </button>
        </div>
      </div>
    </Motion>
  );
}

export default JobPage;
