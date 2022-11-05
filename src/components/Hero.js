import { Link } from "react-router-dom";
import "./Hero.css";
import mark1 from "../img/circle-note.png";
import mark2 from "../img/line.png";
import imagesGroup from "../img/Group 162853.png"
import lines from "../img/(lines).png"

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
        <div className="kmbtn"><Link to="/"><p>Know More</p><div alt="ar"/></Link></div>
      </div>
      <div >
      <img alt="l" src={lines} className="rightSection" />
        <img alt="i" src={imagesGroup} className="rightSection" />
      </div>
    </div>
  );
}

export default Hero;
