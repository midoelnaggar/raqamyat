import React from "react";
import "../../../../styles/OutsourcingPage.css";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import Motion from "../../../Motion";

export default function ContentMarketingPage({ data }) {
  return (
    <Motion>
    <div style={{ paddingBottom: "170px" }}>
      <PageHeader
        title="Marketing"
        breadcrumbs={
          "Services / Solutions / Marketing / Content Marketing"
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
                  <div style={{width:"534px",alignItems:"flex-start" ,textAlign:"start",padding:"15px 30px"}} key={card?.title} className="card">
                    <h1 style={{fontSize:"32px",letterSpacing:"-1.44px",fontWeight:600,maxWidth:"none"}} >{card?.title}</h1>
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
    </div>
    </Motion>
  );
}
