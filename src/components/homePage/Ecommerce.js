import { Link } from "react-router-dom";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";

function Ecommerce({ data }) {
  return (
    <div className="ecommerce">
      <div className="ecommerce-left">
        <img src={data?.image} alt="back" />
      </div>
      <div className="ecommerce-right">
        <h1>
          E-Commerce
          <br />
          <span>
            Solutions
            <span />
          </span>
        </h1>
        <p className="sp">{data?.sub_description}</p>
        <p className="lp">{data?.description}</p>
        <button className="lmbtn">
          <Link to="/about/our-company/our-partners">
            Learn More
            <img alt="ar" src={arrow} />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Ecommerce;
