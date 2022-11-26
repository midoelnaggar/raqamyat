import "../../../../styles/TechnicalSupportAgentsPage.css";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";

export default function TechnicalSupportAgentsPage({ data }) {
  return (
    <div>
      <PageHeader
        title="Operations"
        breadcrumbs={
          "Services / Solutions / Operations / Technical Support Agents"
        }
      />
      <Service data={data} />
      {Array.isArray(data?.sub) &&
        data.sub.map((section, index) => {
          return index === 0 ? (
            <div className="first_section">
              <span>
                {section.title}
                <span />
              </span>
              <div className="solution_subs">
                {Array.isArray(section?.sub) &&
                  section.sub.map((s) => {
                    return (
                      <div className="border">
                        <div
                          style={{ justifyContent: "center" }}
                          className="solution_sub"
                        >
                          <img
                            style={{ marginTop: 0, marginBottom: "10px" }}
                            src={s?.image}
                            alt={s?.title}
                          />
                          <div style={{ fontWeight: 500 }}>{s?.title}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : index === data.sub.length - 1 ? (
            <div
              style={{ backgroundColor: `${index % 2 !== 0 && `white`}` }}
              className="last_section"
            >
              <span>
                {section?.title}
                <span />
              </span>
              <div className="last_section_sub">
                {section?.sub.map((card, index) => {
                  return (
                    <div style={{flexDirection:"row"}} className="first_section">
                    <span>
                      {section.title}
                      <span />
                    </span>
                    <div className="solution_subs">
                      {Array.isArray(section?.sub) &&
                        section.sub.map((s) => {
                          return (
                            <div className="border">
                              <div
                                style={{ justifyContent: "center" }}
                                className="solution_sub"
                              >
                                <img
                                  style={{ marginTop: 0, marginBottom: "10px" }}
                                  src={s?.image}
                                  alt={s?.title}
                                />
                                <div style={{ fontWeight: 500 }}>{s?.title}</div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="sub_container sub_container_osd">
              <div
                key={section?.title}
                className={(index + 1) % 2 === 0 ? "sub" : "sub_inverted"}
              >
                <div className="sub-left">
                  <h1>
                    <span>
                      {section?.title}
                      <span />
                    </span>
                  </h1>
                  <p className="lp">{section?.description}</p>
                  <button className="lmbtn">
                    <Link to="/contact-us">
                      Get Quote! <img alt="ar" src={arrow} />
                    </Link>
                  </button>
                </div>
                <div className="sub-right">
                  <img src={section?.image} alt={section?.title} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
