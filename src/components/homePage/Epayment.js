import "../../styles/Epayment.css";
import { Link } from "react-router-dom";
import Shapes from "../../img/shapes.png";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";

function Epayment ({ data }) {
  return (
    <div className="epayment">
            <img src={Shapes} alt="shapes" className="shapes" />
            <div className="epayment-left">
        <h1>
        E-Payment 
          <br />
          <span>
          Services
            <span />
          </span>
        </h1>
        <p className="sp">{data?.sub_description}</p>
        <p className="lp">{data?.description}</p>
        <button className="lmbtn">
          <Link to="">
            Learn More
            <img alt="ar" src={arrow} />
          </Link>
        </button>
      </div>
      <div className="epayment-right">
        <img src={data.image} alt="back" />
      </div>
    </div>
  );
}

export default Epayment;
