import React from "react";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import rightArrow from "../../../../img/rightArrow.svg";
import leftArrow from "../../../../img/leftArrow.svg";
import downArrow from "../../../../img/Path 71.svg";
import upArrow from "../../../../img/Path 72.svg";
import shape from "../../../../img/shape.svg";
import Motion from "../../../Motion";

export default function MarketingStrategyPage({ data }) {
  return (
    <Motion>
      <div style={{ paddingBottom: "170px" }}>
        <PageHeader
          title="Marketing"
          breadcrumbs={"Services / Solutions / Marketing / Marketing Strategy"}
        />
        <Service data={data} />

        {Array.isArray(data?.sub) && data?.sub[0] &&  (
          <div
            style={{ padding: 0, alignItems: "center" , marginTop:"170px" }}
            className="outsourcing_sections"
          >
            <h1 style={{ textAlign: "center",maxWidth:"524px" }}>
              <span>
                {data?.sub[0].title}
                <span />
              </span>
            </h1>
            <p className="lp">{data?.sub[0].description}</p>
            <div className="strategyDraw">
            <img className="lastArrow" src={rightArrow} alt="arrow" />
            <img className="fifthArrow" src={upArrow} alt="arrow" />
            <img className="fourthArrow" src={downArrow} alt="arrow" />
            <img className="thirdArrow" src={upArrow} alt="arrow" />
              <img className="secondArrow" src={downArrow} alt="arrow" />
              <img className="firstArrow" src={leftArrow} alt="arrow" />
              <div
                style={{ left: "382px", bottom: "75px" }}
                className="strategyDraw_card"
              >
                {data?.sub[0]?.sub[0]?.title}
              </div>
              <div
                style={{ left: "607px", top: "290px" }}
                className="strategyDraw_card"
              >
                {data?.sub[0]?.sub[1]?.title}
              </div>
              <div
                style={{ left: "832px", bottom: "75px" }}
                className="strategyDraw_card"
              >
                {data?.sub[0]?.sub[2]?.title}
              </div>
              <div
                style={{ left: "1057px", top: "290px" }}
                className="strategyDraw_card"
              >
                {data?.sub[0]?.sub[3]?.title}
              </div>
              <div
                style={{ left: "1282px", bottom: "75px",background:"transparent linear-gradient(285deg, #0034DE 0%, #0093DE 100%) 0% 0% no-repeat padding-box" , color:"white" }}
                className="strategyDraw_card"
              >
                <img style={{position:"absolute"}} src={shape} alt="shape" />
                {data?.sub[0]?.sub[4]?.title}
              </div>
            </div>
           
          </div>
        )}
        {Array.isArray(data?.sub) && data?.sub[1] && (
          <div className="outsourcing_sections">
            <h1 style={{ maxWidth: "none" }}>
              <span>
                {data?.sub[1].title}
                <span />
              </span>
            </h1>
            <p className="lp">{data?.sub[1].description}</p>
            <div className="cards">
              {Array.isArray(data.sub) &&
                data?.sub[1].sub.map((card) => {
                  return (
                    <div
                      style={{
                        width: "534px",
                        alignItems: "flex-start",
                        textAlign: "start",
                        padding: "15px 30px",
                      }}
                      key={card?.title}
                      className="card"
                    >
                      <h1
                        style={{
                          fontSize: "32px",
                          letterSpacing: "-1.44px",
                          fontWeight: 600,
                          maxWidth: "none",
                        }}
                      >
                        {card?.title}
                      </h1>
                      <p>{card?.description}</p>
                      <button className="lmbtn">
                        <Link to="/contact-us">
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
