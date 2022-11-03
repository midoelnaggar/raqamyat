import { Link } from "react-router-dom";
import "./Hero.css";
import mark1 from "../img/circle-note.png";
import mark2 from "../img/line.png";
import arrow from "../img/Icon ionic-ios-arrow-round-forward.png"

function Hero() {
  return (
    <div className="hero">
      <div className="leftSection">
        <p className="headline">
          Innovative{" "}
          <span className="marked1">
            Fintech
            <img className="mark1" src={mark1} alt="mark1"></img>
          </span>
          <br />
          Solutions To Amplify
          <br />
          Your{" "}
          <span className="marked2">
            Revenues<img className="mark2" src={mark2} alt="mark2"></img>
          </span>
        </p>
        <p className="smallParagraph">
          <span>Raqamyat</span> is an Egyptian multimillion Fintech <br />
          shareholding company licensed under the Egyptian <br />
          General Authority for Investment & Free Zones (GAFI).
        </p>
        <button className="kmbtn"><Link to="#contact-us" >Know More<img src={arrow}/></Link></button>
      </div>
    </div>
  );
}

export default Hero;
