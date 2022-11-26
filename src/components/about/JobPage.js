import "../../styles/JobsPage.css";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
function JobPage({ data }) {
  const navigate = useNavigate();

  return (
    <Motion>
      <div className="jobsPage">
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
            <div className="job_title">{data?.title}</div>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default JobPage;
