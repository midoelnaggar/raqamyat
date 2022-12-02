import { Link } from "react-router-dom";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";


function Service({ data }) {
  return (
    <div className="service">
      <div className="service_hero">
            <div className="service-left">
                <span>
                  {data?.title}
                  <span />
                </span>
              <p className="lp">
                {data?.description}
              </p>
              <button className="lmbtn">
                <Link to="/contact-us">
                Let’s Talk! <img alt="ar" src={arrow} />
                </Link>
              </button>
            </div>
            <div className="service-right">
              <img src={data?.image} alt={data?.title} />
            </div>
      </div>
    </div>
  );
}

export default Service;
