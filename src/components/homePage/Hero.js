import "../../styles/Hero.css";
import { useEffect, useState } from "react";

import mark1 from "../../img/circle-note.png";
import mark2 from "../../img/line.png";
import lines from "../../img/(lines).png";
import { Link } from "react-router-dom";

function Hero({data}) {
  const [first, setFirst] = useState("");
  const [rem, setRem] = useState("");

  useEffect(() => {
    if (data) {
      setFirst(data?.description?.split(" ")[0]);
      const words = data?.description?.split(" ");
      words[0] = " ";
      setRem(words.join(" "));
    }
  }, [data]);

  return (
    <div className="hero">
      <div className="leftSection">
        <p className="headline">
          Innovative{" "}
          <span className="marked1">
            Fintech
            <img className="mark1" src={mark1} alt="mark1"></img>
          </span>{" "}
          Solutions To Amplify Your{" "}
          <span className="marked2">
            Revenues<img className="mark2" src={mark2} alt="mark2"></img>
          </span>
        </p>
        <p className="smallParagraph">
          <span>{first}</span>
          {rem}
        </p>
        <div className="kmbtn">
          <Link to="/about">
            <p>Know More</p>
            <div alt="ar" />
          </Link>
        </div>
      </div>
      <div>
        <img alt="l" src={lines} className="rightSection" />
        <img alt="i" src={data?.image} className="rightSection fourImages" />
      </div>
    </div>
  );
}

export default Hero;
