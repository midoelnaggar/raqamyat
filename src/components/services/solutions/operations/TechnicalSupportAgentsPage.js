import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import Motion from "../../../Motion";

export default function TechnicalSupportAgentsPage({ data }) {
  return (
    <Motion>
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
              <div  key={index} className="first_section">
                <h1>
                  <span>
                    {section.title}
                    <span />
                  </span>
                </h1>
                <div className="solution_subs">
                  {Array.isArray(section?.sub) &&
                    section.sub.map((s) => {
                      return (
                        <div  key={s?.title} className="border">
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingInline: "280px",
                }}
                className="last_section"
                key={index}
              >
                <div className="last_section">
                  <span style={{ maxWidth: "none" }}>
                    {section?.title}
                    <span />
                  </span>
                  <p style={{ maxWidth: "880px" }} className="lp">
                    {section?.description}
                  </p>
                </div>
                <div
                  style={{ marginInline: "0px" }}
                  className="last_section_sub"
                >
                  {section?.sub.map((s) => {
                    return (
                      <div key={s?.title} className="border" style={{ marginInline: "33px" }}>
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
            ) : (
              <div  key={index} className="sub_container sub_container_osd">
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
                    <img className="mOnlyImg" src={section?.image} alt={section?.title} />
                    <p className="lp">{section?.description}</p>
                    <button className="lmbtn">
                      <Link to="/contact-us">
                        Get Quote! <img alt="ar" src={arrow} />
                      </Link>
                    </button>
                  </div>
                  <div className="sub-right dOnly">
                    <img src={section?.image} alt={section?.title} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Motion>
  );
}
