import React from "react";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import Motion from "../../../Motion";

export default function OperationsSolutionsPage({ data }) {
  return (
    <Motion>
    <div>
      <PageHeader
        title="Operations"
        breadcrumbs={
          "Services / Solutions / Operations / Operations Solutions"
        } 
      />
      <Service data={data} />
      {Array.isArray(data?.sub) &&
        data.sub.map((section, index) => {
          return index === 0 ? (
            <div className="first_section">
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
            <div style={{paddingTop:0}} className="last_section">
              <h1>
              <span style={{maxWidth:"860px"}}>
                {section?.title}
                <span  />
              </span>
              </h1>
              <div style={{maxWidth:"980px",paddingBottom:"35px",textAlign:"center"}} className="last_section_sub_subtitle">
                {section?.description}
              </div>
              <div className="last_section_sub">
                {section?.sub.map((card,index)=>{
                  return(
                    <div style={{height:"130px"}} className="last_section_sub_card">
                      <div className="last_section_sub_card_title">
                        {card?.title}
                      </div>
                      <div style={{paddingTop:"10px"}} className="last_section_sub_card_subtitle">
                        {card?.description}
                      </div>
                    </div>
                  )
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
                      Let’s Talk! <img alt="ar" src={arrow} />
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
    </Motion>
  );
}
