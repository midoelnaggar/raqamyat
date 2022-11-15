import "./Articles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueArrow from "../../img/Icon ionic-ios-arrow-round-forwardb.png";
import axios from "axios";

function Articles({}) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios("https://newraq.raqamyat.com/public/api/blogs").then((response) => {
      setArticles(response.data.data);
    });
  }, []);
  return (
    <div className="articles">
      <h1>
        Top{" "}
        <span>
          Articles
          <span />
        </span>
      </h1>
      <div className="posts">
        {articles.map((post) => {
          return (
            <div className={"post"}>
              <img src={post.image} alt="post" />
              <div className="tag">
                <h1>{post.type}</h1>
              </div>
              <div className="date">{post.date}</div>
              <div className="title">
                {post.title}
              </div>
              <div className="caption">{post.details}</div>
              <div className="footer">
                <div>
                  <div className="by">by</div>
                  <div className="auther">{post.by}</div>
                </div>
                <Link to={`/article/${post.slug}`} className="rmb">
                  <div className="readmore">Read more </div>
                  <img className="arrow" src={BlueArrow} alt="arrow" />
                </Link>
              </div>
            </div>
          );
        })}{" "}
      </div>
      <div className="kmbtn">
        <Link>
          <p>Know More</p>
          <div alt="ar" />
        </Link>
      </div>
    </div>
  );
}

export default Articles;
