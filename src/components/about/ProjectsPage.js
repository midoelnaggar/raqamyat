import React from "react";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import case_image from "../../img/case.png";
// import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";

function ProjectsPage({ data }) {
  return (
    <Motion>
      <div className="ss_page">
        <div className="head_bg">
          <PageHeader
            title="Projects"
            breadcrumbs="Home / About / News / Projects"
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
            {Array.isArray(data?.item?.data) &&
              data.item?.data?.map((c, index) => {
                return (
                  <div
                    key={c.id}
                    className={(index + 1) % 2 === 0 ? "case_inverted" : "case"}
                  >
                    <div className="imageContainer">
                      <img
                        onError={(e) => (e.target.src = case_image)}
                        className="case_image"
                        src={c?.image}
                        alt="case"
                      />
                    </div>
                    <div className="case_info">
                      <div className="case_title">{c.title}</div>
                      <div className="case_types">
                        {Array.isArray(c?.project_type) &&
                          c?.project_type.map((t) => {
                            return <div className="case_type">{t}</div>;
                          })}
                      </div>
                      <p className="case_desc">{c.details}</p>
                      {/*<div className="case_keywords">
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
                        */}
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

export default ProjectsPage;
