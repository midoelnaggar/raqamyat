import "./About.css";
import coimage from "../../img/Image.png";
function About() {
  return (
    <div className="about">
      <div className="leftComp">
        <img src={coimage} alt="coimage" className="coimage" />
        <p>
          Raqamyat's headquarter is in Maadi, Cairo, Egypt, and is
          well-connected to the market's key players of E-Payment Gateways,
          E-Payment Facilitators (locally and internationally), Merchants, and
          Shoppers of all levels.
        </p>
      </div>
      <div className="rightComp">
          <h1>
            About
            <br />
            The
            <span> Company<span /></span>
          </h1>
        <p>
        Raqamyat is an Egyptian multimillion Fintech shareholding company licensed under the Egyptian General Authority for Investment & Free Zones (GAFI). Raqamyat provides integrated solutions for Electronic Payments (E-Payments) and Electronic Commerce (E-Commerce) to maximize profitability and market outreach for service providers and their targeted customers.
        </p>
        <p>
        We architect and develop e-payment and e-commerce solutions in order to handle all aspects of e-payment management, billing, mobile payments, contactless payments, settlement, point of sale, card issuing, card acquiring, microfinance, and electronic payments processing.
        </p>
      </div>
    </div>
  );
}

export default About;
