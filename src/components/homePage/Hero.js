import "./Hero.css";
import axios from "axios";
import { useEffect, useState } from "react";
import mark1 from "../../img/circle-note.png";
import mark2 from "../../img/line.png";
import imagesGroup from "../../img/Group 162853.png";
import lines from "../../img/(lines).png";

function Hero() {
  const [data, setData] = useState({});
  const [first, setFirst] = useState();
  const [rem, setRem] = useState();

  useEffect(() => {
    axios
      .get("https://newraq.raqamyat.com/public/api/home")
      .then( (response) => {
        setData( response.data);
        console.log(data)
      });
  }, []);

  useEffect(async() => {
     setFirst(await data?.hero?.description.split(" ")[0]);
    const words = data?.hero?.description?.split(" ");
    console.log(words);
    delete words[1];
    setRem(await words.join(" "));
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
        {data ? (
          <p className="smallParagraph">
            <span>{first}</span>
            {rem}
          </p>
        ) : (
          <p className="smallParagraph">
            <span>Raqamyat</span> is an Egyptian multimillion Fintech
            shareholding company licensed under the Egyptian General Authority
            for Investment & Free Zones (GAFI).
          </p>
        )}
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
