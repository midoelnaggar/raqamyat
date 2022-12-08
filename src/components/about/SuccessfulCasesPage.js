import React from "react";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import case_image from "../../img/case.png";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";

function SuccessfulCasesPage({ data }) {
  const cases = [
    {
      title: "Project Name",
      type: "Project Type",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      keywords: ["Ecommerce", "Online Payment", "Mobile App"],
      image: "../img/case.png",
      id:1
    },
    {
      title: "Project Name",
      type: "Project Type",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      keywords: ["Ecommerce", "Online Payment", "Mobile App"],
      id:2
        },
    {
      title: "Project Name",
      type: "Project Type",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      keywords: ["Ecommerce", "Online Payment", "Mobile App"],
      id:3
    },
  ];

  return (
    <Motion>
      <div className="ss_page">
        <div className="head_bg">
          <PageHeader
            title="Successful Cases"
            breadcrumbs="Home / About / Our company / Successful Cases"
          />
        </div>
        <div className="page_content">
          <div className="page_subtitle">
            <div>
              Raqamyat team is committed to deliver revenue throughout
              successful projects
            </div>
          </div>
          <div className="cases">
            {Array.isArray(cases) &&
              cases.map((c, index) => {
                return (
                  <div key={c.id}
                    className={(index + 1) % 2 === 0 ? "case_inverted" : "case"}
                  >
                    <div className="imageContainer"> 
                    <img className="case_image" src={case_image} alt="case" />
                    </div>
                    <div className="case_info">
                      <div className="case_title">{c.title}</div>
                      <div className="case_type">{c.type}</div>
                      <p className="case_desc">{c.desc}</p>
                      <div className="case_keywords">
                        {Array.isArray(c.keywords) &&
                          c.keywords.map((k) => {
                            return (
                              <div className="case_keyword" key={k}>
                                <div className="case_keyword_name">{k}</div>
                              </div>
                            );
                          })}
                      </div>
                      <button className="case_btn">
                        <div>
                          <div>Know More</div>
                          <img src={arrow} alt="arrow" />
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default SuccessfulCasesPage;
