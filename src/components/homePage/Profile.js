import "./Profile.css";
import Back from "../../img/Mask Group 2.png";
import Eye from "../../img/Group 226.png";
import Target from "../../img/Group 229.png";
import Lamp from "../../img/Group 233.png";

function Profile() {
  return (
    <div className="profile">
      <div className="top">
        <h1>
          What Makes Us
          <br />
          <span>
            Different?
            <span />
          </span>
        </h1>
        <p>
          We help businesses achieve their mission by literally working on
          improving their success. Our partners are considered the giants of the
          fintech market. We are capable of delivering all services related to
          e-commerce. We are well-known for our long-term commitment to our
          clients and our consistent contribution to their success.
        </p>
      </div>
      <div className="bottom">
        <div className="maskImage">
          <img src={Back} alt="back" className="back" />
          <img className="ico" src={Eye} alt="ico" />
          <h1>Vision</h1>
          <p>
            To build a sustained electronic payments society within the MEA
            region by providing inclusive and innovative solutions that advance
            how the region pays, shops, and invests.
          </p>
        </div>
        <div className="maskImage">
          <img src={Back} alt="back" className="back" />
          <img className="ico" src={Target} alt="ico" />
          <h1>Mission</h1>
          <p>
            To empower merchants of all sizes by offering a fully-fledged set of
            stable business/technical e-commerce services and e-payment
            solutions through innovative technologies.
          </p>
        </div>
        <div className="maskImage">
          <img src={Back} alt="back" className="back" />
          <img className="ico" src={Lamp} alt="ico" />
          <h1>Values</h1>
          <p>
            We develop, operate, and market to improve performance and maximize
            profit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
