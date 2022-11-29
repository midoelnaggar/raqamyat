import React from "react";
import "../../../../styles/OutsourcingPage.css";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import Motion from "../../../Motion";

export default function EPaymentIntegrationsPage({ data }) {
  return (
    <Motion>
    <div style={{ paddingBottom: "170px" }}>
      <PageHeader
        title="Development"
        breadcrumbs={
          "Services / Solutions / Development / E-Payment Integrations"
        }
      />
      <Service data={data} />
      {data?.sub[0] && (
        <div className="outsourcing_sections">
          <h1>
            <span>
              {data?.sub[0].title}
              <span />
            </span>
          </h1>
          <p className="lp">{data?.sub[0].description}</p>
          <div className="cards">
            {Array.isArray(data.sub) &&
              data?.sub[0].sub.map((card) => {
                return (
                  <div key={card?.title} className="card">
                    <h1>{card?.title}</h1>
                    <p>{card?.description}</p>
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
      )}
      {data?.sub[1] && (
        <div style={{background:"white"}} className="outsourcing_sections">
          <h1>
            <span>
              {data?.sub[1].title}
              <span />
            </span>
          </h1>
          <p className="lp">{data?.sub[1].description}</p>
          <div  className="cards">
            {Array.isArray(data.sub) &&
              data?.sub[1].sub.map((parterLogo) => {
                return (
                  <img className="partenerLogo" src={parterLogo?.image} alt="partenerLogo"  />               );
              })}
          </div>
        </div>
      )}
    </div>
    </Motion>
  );
}
