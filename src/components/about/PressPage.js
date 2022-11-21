import React from "react";
import "../../styles/BlogPage.css";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";
import BlueArrow from "../../img/Icon ionic-ios-arrow-round-forwardb.png";
import seachIcon from "../../img/search-icon.svg";
import Motion from "../Motion";

function PressPage({ data }) {
  const keywords = [
    "Retail Ecommerce",
    "Ecommerce Trends",
    "Online Shopping",
    "Fintech Investment",
    "Epayment",
    "Mobile Wallets",
  ];

  return (
    <Motion>
      <div className="blog_page">
        <div className="head_bg">
          <PageHeader title="Press" breadcrumbs="Home / About / News / Press" />
        </div>
        <div className="page_content">
          <div className="blog_left">
            {Array.isArray(data) &&
              data.map((post) => {
                return (
                  <div key={post?.title} className={"post"}>
                    <img src={post.image} alt="post" />
                    <div className="tag">
                      <h1>{post.type}</h1>
                    </div>
                    <div className="date">{post.date}</div>
                    <div className="title">{post.title}</div>
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
              })}
            {Array.isArray(data) &&
              data.map((post) => {
                return (
                  <div key={post?.title} className={"post"}>
                    <img src={post.image} alt="post" />
                    <div className="tag">
                      <h1>{post.type}</h1>
                    </div>
                    <div className="date">{post.date}</div>
                    <div className="title">{post.title}</div>
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
              })}
            {Array.isArray(data) &&
              data.map((post) => {
                return (
                  <div key={post?.title} className={"post"}>
                    <img src={post.image} alt="post" />
                    <div className="tag">
                      <h1>{post.type}</h1>
                    </div>
                    <div className="date">{post.date}</div>
                    <div className="title">{post.title}</div>
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
              })}
          </div>
          <div className="blog_right">
            <div className="search">
              <input placeholder="Search" />
              <img src={seachIcon} className="sbtn" alt="search" />
            </div>
            <div className="categories">
              <div className="categories_title">CATEGORIES</div>
              <div className="categories_list">
                <div className="category">
                  <div className="category_name">All</div>
                  <div className="category_count">
                    <div>33</div>
                  </div>
                </div>
                <div className="category">
                  <div className="category_name">EPayment</div>
                  <div className="category_count">
                    <div>13</div>
                  </div>
                </div>
                <div className="category">
                  <div className="category_name">ECommerce</div>
                  <div className="category_count">
                    <div>21</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="keywords">
              <div className="keywords_title">KEYWORDS</div>
              <div className="keywords_list">
                {keywords.map((k) => {
                  return (
                    <div className="keyword" key={k}>
                      <div className="keyword_name">{k}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default PressPage;
