import React from "react";
import "../../../../styles/OutsourcingPage.css";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";

export default function OutsourcingPage({ data }) {
  return (
    <div style={{paddingBottom:"170px"}}>
      <PageHeader
        title="Development"
        breadcrumbs={"Services / Solutions / Development / Outsourcing"}
      />
      <Service data={data} />
      {Array.isArray(data?.sub) &&
        data?.sub.map((section, index) => {
          return (
            <div className="outsourcing_sections">
              <h1>
                <span>
                  {section?.title}
                  <span />
                </span>
              </h1>
              <p className="lp">{section?.description}</p>
              <div className="cards">
                { Array.isArray(section.sub) && section?.sub.map((card) => {
                  return (
                    <div key={card?.title} className="card">
                      <h1>{card?.title}</h1>
                      <p>{""}</p>
                      <button className="lmbtn">
                        <Link to="">
                          Learn More
                          <img alt="ar" src={arrow} />
                        </Link>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
