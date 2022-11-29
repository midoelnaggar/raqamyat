import { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "../../styles/WebinarsPage.css";
import PageHeader from "../PageHeader";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Motion from "../Motion";

function WebinarsPage({ data, setWebinar }) {
  const [upcomingWebinars, setUpcomingWebinars] = useState([]);
  const [previousWebinars, setPreviousWebinars] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setUpcomingWebinars(
        data.filter((webinar) => {
          return moment(webinar.date, "DD-MM-YYYY HH:mm:SS") > Date.now();
        })
      );
      setPreviousWebinars(
        data.filter((webinar) => {
          return Date.parse(webinar.date) < Date.now();
        })
      );
    }
  }, [data]);

  return (
    <Motion>
      <div className="webinars_page">
        <div className="head_bg">
          <PageHeader title="Webinars" breadcrumbs="Home / About / Webinars" />
        </div>
        <div className="page_content">
          <div className="page_subtitle">
            <div>
              Live Knowledge Sharing Sessions By Industry Experts On Latest And
              Trending Skills And Technologies
            </div>
          </div>
          {upcomingWebinars.length > 0 && (
            <div className="webinars_container">
              <span>
                Upcoming Webinars
                <span />
              </span>
              <div>
                <div className="webinars">
                  {upcomingWebinars.map((webinar) => {
                    return (
                      <div className="webinar" key={webinar?.id}>
                        <img src={webinar?.image} alt={webinar?.name} />
                        <div>
                          <div>
                            <div className="webinar_date">
                              <DateRangeIcon
                                fontSize="small"
                                style={{ opacity: 0.5 }}
                              />
                              <div>
                                {moment(webinar.date, "DD-MM-YYYY").format(
                                  "DD MMM[.] YYYY"
                                )}
                              </div>
                              <div>|</div>
                              <div>
                                {moment(
                                  webinar.date,
                                  "DD-MM-YYYY HH:mm:SS"
                                ).format("hh[:]mm A")}
                              </div>
                            </div>
                            <div className="webinar_title">{webinar.name}</div>
                          </div>
                          <div>
                            <div style={{ maxWidth: "180px" }}>
                              <div
                                style={{ color: "#A2A2A2", fontSize: "13px" }}
                              >
                                by
                              </div>
                              <div className="webinar_speaker">
                                {webinar.speker}
                              </div>
                              <div className="speaker_position">
                                {webinar.position}
                              </div>
                              <div className="speaker_company">
                                {webinar.company}
                              </div>
                            </div>
                            <div>
                              <Link
                                onClick={setWebinar(webinar)}
                                to={`/about/webinars/${webinar.name
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`}
                              >
                                <button type="submit" className="sbtn">
                                  Register Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {previousWebinars.length > 0 && (
            <div
              className="webinars_container"
              style={{
                backgroundColor: "white",

              }}
            >
              <span>
                Previous Webinars
                <span />
              </span>
              <div className="webinars">
                {previousWebinars.map((webinar) => {
                  return (
                    <div className="webinar" key={webinar?.id}>
                      <img src={webinar?.image} alt={webinar?.name} />
                      <div>
                        <div>
                          <div className="webinar_date">
                            <DateRangeIcon
                              fontSize="small"
                              style={{ opacity: 0.5 }}
                            />
                            <div>
                              {moment(webinar.date, "DD-MM-YYYY").format(
                                "DD MMM[.] YYYY"
                              )}
                            </div>
                            <div>|</div>
                            <div>
                              {moment(
                                webinar.date,
                                "DD-MM-YYYY HH:mm:SS"
                              ).format("HH[:]mm A")}
                            </div>
                          </div>
                          <div className="webinar_title">{webinar.name}</div>
                        </div>
                        <div>
                          <div style={{ maxWidth: "180px" }}>
                            <div style={{ color: "#A2A2A2", fontSize: "13px" }}>
                              by
                            </div>
                            <div className="webinar_speaker">
                              {webinar.speker}
                            </div>
                            <div className="speaker_position">
                              {webinar.position}
                            </div>
                            <div className="speaker_company">
                              {webinar.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Motion>
  );
}

export default WebinarsPage;
