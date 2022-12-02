import React from "react";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import Motion from "../../../Motion";

export default function ProjectsOperationsPage({ data }) {
  return (
    <Motion>
    <div>
      <PageHeader
        title="Operations"
        breadcrumbs={
          "Services / Solutions / Operations / Projects Operations (BOT)"
        }
      />
      <Service data={data} />
      {Array.isArray(data?.sub) && data?.sub.map((section,index)=>{ return(
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
          )
        })
        }
    </div>
    </Motion>
  );
}
