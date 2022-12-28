import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import { Link } from "react-router-dom";
import arrow from "../../../../img/Icon ionic-ios-arrow-round-forward.png";
import Motion from "../../../Motion";

export default function VideoProductionServicesPage({ data }) {
  return (
    <Motion>
      <div>
        <PageHeader
          title="Marketing"
          breadcrumbs={
            "Services / Solutions / Marketing / Video Production Services"
          }
        />
        <Service data={data} />
        {Array.isArray(data?.sub) &&
          data.sub.map((section, index) => {
            return index === 0 ? (
              <div  key={index} className="outsourcing_sections">
                <h1>
                  <span>
                    {section?.title}
                    <span />
                  </span>
                </h1>
                <p className="lp">{section?.description}</p>
                <div className="cards">
                  {Array.isArray(data.sub) &&
                    section?.sub.map((card) => {
                      return (
                        <div key={card?.title} className="card">
                          <h1>{card?.title}</h1>
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
            ) : (
              <div className="sub_container sub_container_osd">
                <div
                  key={section?.title}
                  className={(index + 1) % 2 === 0 ? "sub" : "sub_inverted"}
                >
                  <div className="sub-left">
                  <img className="mOnlyImg" src={section?.image} alt={section?.title} />
                    <p className="lp">{section?.description}</p>
                    <button className="lmbtn">
                      <Link to="/contact-us">
                        Let’s Talk! <img alt="ar" src={arrow} />
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
