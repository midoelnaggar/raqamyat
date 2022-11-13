import "./Hero.css";
import { useEffect, useState, useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { LoadingContext } from "../../context/LoadingContext";

import mark1 from "../../img/circle-note.png";
import mark2 from "../../img/line.png";
import imagesGroup from "../../img/Group 162853.png";
import lines from "../../img/(lines).png";

function Hero() {
  const homeData = useContext(HomeContext);
  const {loading,setLoading} = useContext(LoadingContext);

  const [first, setFirst] = useState("");
  const [rem, setRem] = useState("");

  useEffect(() => {
    if (homeData) {
      setFirst(homeData?.hero?.description?.split(" ")[0]);
      const words = homeData?.hero?.description?.split(" ");
      words[0] = " ";
      setRem(words.join(" "));
    }
    console.log(loading)
  }, [homeData]);

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
          <a href="/">
            <p>Know More</p>
            <div alt="ar" />
          </a>
        </div>
      </div>
      <div>
        <img alt="l" src={lines} className="rightSection" />
        <img alt="i" src={imagesGroup} className="rightSection fourImages" />
      </div>
    </div>
  );
}

export default Hero;
