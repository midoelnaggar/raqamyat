import React from "react";
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
      {Array.isArray(data?.sub) && Array.isArray(data?.sub) && data?.sub[0] &&  (
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
              data?.sub[0]?.sub?.map((card) => {
                return (
                  <div style={{position:"relative",padding:"20px 30px",width:"300px",height:"200px",justifyContent:"normal"}} key={card?.title} className="card">
                    <h1>{card?.title}</h1>
                    <p style={{color:"#2a2a2a",marginTop:0}}>{card?.description}</p>
                    <button style={{position:"absolute", bottom:"30px" }}  className="lmbtn">
                      <Link  to="/contact-us">
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
              {data?.sub[1]?.title}
              <span />
            </span>
          </h1>
          <p className="lp">{data?.sub[1]?.description}</p>
          <div  className="cards">
            {Array.isArray(data.sub) &&
              data?.sub[1]?.sub?.map((parterLogo) => {
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
