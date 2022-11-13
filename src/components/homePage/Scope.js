import "./Scope.css";
import Shapes from "../../img/shapes.png";
import { Link } from "react-router-dom";
import Operations from "../../img/Path 83184.png";
import Marketing from "../../img/Group 162668.png";
import Development from "../../img/Group 162665.png";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png"

function Scope() {
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
        <div className="card first">
          <img src={Operations} alt="Operations" />
          <h1>Operations</h1>
          <p>We streamline your operations!</p>
          <button className="lmbtn"><Link to="" >Learn More<img alt="ar" src={arrow}/></Link></button>
        </div>
        <div className="card middle">
          <img src={Marketing} alt="Marketing" />
          <h1>Marketing</h1>
          <p>Convert shoppers into paying customers!</p>
          <button className="lmbtn"><Link to="" >Learn More<img alt="ar" src={arrow}/></Link></button>
        </div>
        <div className="card third">
          <img src={Development} alt="Development" />
          <h1>Development</h1>
          <p>Take your online store to the next level!</p>
          <button className="lmbtn"><Link to="" >Learn More<img alt="ar" src={arrow}/></Link></button>
        </div>
      </div>
    </div>
  );
}

export default Scope;
