import "../../styles/Scope.css";
import Shapes from "../../img/shapes.png";
import { Link } from "react-router-dom";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";

function Scope({ data }) {
  return (
    <div className="scope">
      <img src={Shapes} alt="shapes" className="shapes" />
      <div className="head">
        <h1>
          Our
          <span>
            {" "}
            Scope
            <span />
          </span>
        </h1>
      </div>
      <div className="cards">
        {data?.sub.map((card) => {
          return (
            <div className="card">
              <img src={card.image} alt="Operations" />
              <h1>{card.title}</h1>
              <p>{card.description}</p>
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
}

export default Scope;
