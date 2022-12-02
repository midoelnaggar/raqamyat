import PageHeader from "../PageHeader";
import Motion from "../Motion";
import { Link } from "react-router-dom";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";
import image from "../../img/Group 7.png";
function JobsPage({ data }) {
  return (
    <>
      <Motion>
        <div className="jobsPage">
          <PageHeader
            title="Jobs"
            breadcrumbs="Home / About Us / Careers / Jobs"
          />
          <div className="jobsTop">
            <div className="jobs-left">
              <h1>
                <span>
                  COME OVER AND JOIN US!
                  <span />
                </span>
              </h1>
              <p className="lp">
                Raqamyat is a growing, dynamic company that offers exciting
                opportunities to its employees. At Raqamyat, every day brings
                new challenges. Every day brings opportunities to learn and
                thrive. Every day brings new chances to wow our clients. We work
                hard but we play hard too.
              </p>
              <button className="lmbtn">
                <Link to="/contact-us">
                  Apply Now <img alt="ar" src={arrow} />
                </Link>
              </button>
            </div>
            <div className="jobs-right">
              <img src={image} alt="back" />
            </div>
          </div>
          <div className="sub_container">
            <h1>
              <span>
                Come win with us!
                <span />
              </span>
            </h1>
            <p className="lp">
              As a fast-growing company, we are looking only for passionate,
              skilled, and creative people to join our team’s roster. If you’re
              looking for an opportunity that will lead you to the next level of
              your career, you’ve come to the right place.
            </p>
            <div className="jobs">
              {Array.isArray(data) &&
                data?.map((job) => {
                  return (
                    <div key={job?.title} className="job">
                      <h1>{job?.title}</h1>
                      <p>Please click Apply Now for more details.</p>
                      <Link
                        to={`/about/careers/jobs/${job?.slug}`}
                      >
                        <div className="btn">
                          Apply Now <img src={arrow} alt="arrow" />
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}

export default JobsPage;
