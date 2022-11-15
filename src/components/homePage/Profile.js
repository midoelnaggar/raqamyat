import "../../styles/Profile.css";
import Back from "../../img/Mask Group 2.png";

function Profile({data}) {
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
        <p>{data?.description}</p>
      </div>
      <div className="bottom">
        { data?.sub.map((a) => {
          return(
          <div className="maskImage">
            <img src={Back} alt="back" className="back" />
            <img className="ico" src={a.image} alt="ico" />
            <h1>{a.title}</h1>
            <p>{a.description}</p>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default Profile;
