import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueArrow from "../../img/Icon ionic-ios-arrow-round-forwardb.png";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import fallback from "../../img/fallbackBlog.png"


function Articles({setLoading}) {
  const [articles, setArticles] = useState([]);
  const [aciveSlideIndex, setAciveSlideIndex] = useState(null);

  useEffect(() => {
    axios("https://newraq.raqamyat.com/public/api/jobs?type=blog").then(
      (response) => {
        setArticles(response.data.item.data);
      }
    );
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
      <div>
        <Swiper
          onSlideChange={(e)=>setAciveSlideIndex(e.activeIndex)}
          slidesPerView={4}
          initialSlide={2}
          spaceBetween={200}
          mousewheel={true}
          navigation={true}
          className="mySwiper"
        >
          {Array.isArray(articles) &&
            articles.map((post, index) => {
              return (
                <SwiperSlide style={{opacity: aciveSlideIndex === index || aciveSlideIndex + 3 === index  ? 0.5 : 1}} key={index}>
                  <Link
                    onClick={() => {
                      setLoading(true);
                    }}
                    to={`/blog/${post?.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{ marginInlineStart: "-70px"}}
                      className={"post"}
                    >
                         <img onError={(e)=> e.target.src = fallback } src={post?.image} alt="post" />
                    {post?.type &&<div className="tag">
                      <h1>{post?.type}</h1>
                    </div>}
                      <div className="date">{post.date}</div>
                      <div className="title">{post.title}</div>
                      <div className="caption">{post.details}</div>
                      <div className="post_footer">
                        <div>
                          <div className="by">by</div>
                          <div className="auther">
                            {post?.auther_name
                              ? post?.auther_name !== "-"
                                ? post?.auther_name
                                : "Raqamyat"
                              : "Raqamyat"}
                          </div>
                        </div>
                        <Link to={`/blog/${post?.slug}`} className="rmb">
                          <div className="readmore">Read more </div>
                          <img className="arrow" src={BlueArrow} alt="arrow" />
                        </Link>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="kmbtn">
        <Link to="/blog">
          <p>All Articles</p>
          <div alt="ar" />
        </Link>
      </div>
    </div>
  );
}

export default Articles;
