import "./Articles.css";
import { Link } from "react-router-dom";
import PostImage from "../img/Rectangle 147627.png";
import BlueArrow from "../img/Icon ionic-ios-arrow-round-forwardb.png";

function Post({edged}) {
  return (
    <div className={"post "+edged}>
      <img src={PostImage} alt="post" />
      <div className="tag"></div>
      <h5>E COMMERCE</h5>
      <div className="date">06/07/2022</div>
      <div className="title">Top Payment Gateway Providers In Egypt</div>
      <div className="caption">
        Payment Gateways Effect On New Era
        <br /> With technology being used in every part of life, today people
        are living in a digital era. Doing business has...
      </div>
      <div className="footer">
        <div>
          <div className="by">by</div>
          <div className="auther">Wael Hossam</div>
        </div>
        <Link className="rmb">
          <div className="readmore">Read more </div>
          <img className="arrow" src={BlueArrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div className="articles">
      <h1>
        Top
        <span>
          {" "}
          Articles
          <span />
        </span>
      </h1>
      <div className="posts">
        <Post edged="edged" />
        <Post />
        <Post />
        <Post edged="edged" />
      </div>
      <div className="kmbtn"><Link><p>Know More</p><div alt="ar"/></Link></div>
    </div>
  );
}

export default Articles;
