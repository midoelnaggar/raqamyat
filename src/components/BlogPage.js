import { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import { CircleLoader } from "react-spinners";
import { Link } from "react-router-dom";
import BlueArrow from "../img/Icon ionic-ios-arrow-round-forwardb.png";
import seachIcon from "../img/search-icon.svg";
import Motion from "./Motion";
import axios from "axios";
import fallback from "../img/fallbackBlog.png";
import { Typography } from "@mui/material";



function BlogPage({ data }) {
  const [searchLoading, setSearchLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [allCount, setAllCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  useEffect(() => {
    setSelectedCategory("");
  }, [selectedSearch]);

  useEffect(() => {
    setLoadedPosts(currentData?.item?.data);
    setCategories(currentData?.types);
    setKeywords(currentData?.keywords);
    setCurrentPage(currentData?.item?.meta?.pagination?.current_page);
    setTotalPages(currentData?.item?.meta?.pagination?.total_pages);

  }, [currentData]);

useEffect(() => {
  setAllCount(categories?.map((cat)=>{ return cat?.count})?.reduce((a, b) => a + b, 0))
}, [categories]);

  useEffect(() => {
    setSearchLoading(true);
    if (
      (selectedSearch === "") &
      (selectedCategory === "") &
      (selectedKeyword === "")
    ) {
      setCurrentData(data);
      setSearchLoading(false);
    } else {
      const searchPosts = async () => {
        try {
          const res = await axios.get(
            `https://newraq.raqamyat.com/public/api/jobs?type=blog&title=${selectedSearch}&category=${selectedCategory}&tag=${selectedKeyword}`
          );
          setCurrentData(await res?.data);
          setSearchLoading(false);
        } catch (error) {
          console.log(error);
          setSearchLoading(false);
        }
      };
      setTimeout(searchPosts, 1000);
    }
  }, [selectedSearch, selectedCategory, selectedKeyword]);

  /* const handleSearch = (e) => {
    setSearchLoading(true);
   
    

    const cats = document.getElementsByClassName("category_name");
    
    
    for (let i = 0; i < cats.length; i++) {
      cats[i].style.fontWeight = 400;
    }

    const keys = document.getElementsByClassName("keyword");

    for (let i = 0; i < keys.length; i++) {
      keys[i].style.border = "none";
    }

    const searchPosts = async () => {
      try {
        const res = await axios.get(
          `https://newraq.raqamyat.com/public/api/jobs?type=blog&title=${e?.target?.value}`
        );
        setCurrentData(await res?.data);
        setSearchLoading(false);
      } catch (error) {
        console.log(error);
        setSearchLoading(false);
      }
    };

    setTimeout(searchPosts, 1000);
  };

  const handleCategoryFilter = async (categoryTitle,e) => {
    setSearchLoading(true);
    
    document.getElementById("inputSearch").value=""
    
    const cats = document.getElementsByClassName("category_name");
    for (let i = 0; i < cats.length; i++) {
      cats[i].style.fontWeight = 400;
    }

    const keys = document.getElementsByClassName("keyword");
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.border = "none";
    }

    e.target.querySelector(".category_name").style.fontWeight = 600;
    const filterPosts = async () => {
      try {
        const res = await axios.get(
          `https://newraq.raqamyat.com/public/api/jobs?type=blog&category=${categoryTitle}`
        );
        setCurrentData(await res?.data);
        setSearchLoading(false);
      } catch (error) {
        console.log(error);
        setSearchLoading(false);
      }
    };

    filterPosts();
  };

  const handleKeywordFilter = async (keyword,e) => {
    setSearchLoading(true);

    document.getElementById("inputSearch").value=""

    const keys = document.getElementsByClassName("keyword");
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.border = "none";
    }

    const cats = document.getElementsByClassName("category_name");
    for (let i = 0; i < cats.length; i++) {
      cats[i].style.fontWeight = 400;
    }

    e.target.style.border = "2px solid blue";
    const filterPosts = async () => {
      try {
        const res = await axios.get(
          `https://newraq.raqamyat.com/public/api/jobs?type=blog&tag=${keyword}`
        );
        setCurrentData(await res?.data);
        setSearchLoading(false);
      } catch (error) {
        console.log(error);
        setSearchLoading(false);
      }
    };

    filterPosts();
  }; */

  const handleLoadMore = async () => {
    setLoadMoreLoading(true);
    const res = await axios.get(
      `https://newraq.raqamyat.com/public/api/jobs?type=blog&page=${
        currentPage + 1
      }`
    );
    setLoadedPosts(loadedPosts.concat(await res?.data?.item?.data));
    setCurrentPage(await res?.data?.item?.meta?.pagination?.current_page);
    setTotalPages(await res?.data?.item?.meta?.pagination?.total_pages);
    setLoadMoreLoading(false);
  };

  return (
    <Motion>
      <div className="blog_page">
        <div className="head_bg">
          <PageHeader title="Articles" breadcrumbs="Home / Articles" />
        </div>
        <div className="page_content">
          <div className="blog_left">
            <div
              style={{
                display: searchLoading ? "flex" : "none",
                justifyContent: "center",
                width: "100%",
                paddingBottom: "500px",
              }}
            >
              <CircleLoader
                color="#0093de"
                size="20vh"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            {Array.isArray(loadedPosts) && loadedPosts.length > 0 ? (
              loadedPosts?.map((post, index) => {
                return (
                  <Link
                    to={`/articles/${post?.slug}`}
                    style={{
                      textDecoration: "none",
                      display: searchLoading ? "none" : "block",
                    }}
                  >
                    <div key={index} className={"post"}>
                      <img
                        onError={(e) => (e.target.src = fallback)}
                        src={post?.image}
                        alt="post"
                      />
                      {post?.type && (
                        <div className="tag">
                          <h1>{post?.type}</h1>
                        </div>
                      )}
                      <div className="date">{post?.date}</div>
                      <div className="title">{post?.title}</div>
                      <Typography variant="subtitle1" className="caption">
                        {post?.details}

                      </Typography>
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
                        <Link to={`/articles/${post?.slug}`} className="rmb">
                          <div className="readmore">Read more </div>
                          <img className="arrow" src={BlueArrow} alt="arrow" />
                        </Link>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="noResults">No Results Found.</div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {loadMoreLoading ? (
                <CircleLoader
                  color="#0093de"
                  size="10vh"
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <button
                  onClick={handleLoadMore}
                  style={{
                    display: `${
                      (currentPage !== totalPages) & !searchLoading
                        ? "block"
                        : "none"
                    }`,
                  }}
                  className="loadMoreBtn"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
          <div className="blog_right">
            <div className="search">
              <input
                id="inputSearch"
                onChange={(e) => setSelectedSearch(e.target.value)}
                placeholder="Search"
              />
              <img src={seachIcon} className="sbtn" alt="search" />
            </div>
            <div className="categories">
              <div className="categories_title">CATEGORIES</div>
              <div className="categories_list">
                <div
                  onClick={() => setSelectedCategory("")}
                  className="category"
                >
                  <div
                    style={{ fontWeight: selectedCategory === "" ? 500 : 400 }}
                    className="category_name"
                  >
                    All
                  </div>
                  <div className="category_count">
                    <div>{allCount}</div>
                  </div>
                </div>
                {Array.isArray(categories) &&
                  categories?.map((category, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          selectedCategory === category?.title
                            ? setSelectedCategory("")
                            : setSelectedCategory(category?.title)
                        }
                        className="category"
                      >
                        <div
                          style={{
                            fontWeight:
                              selectedCategory === category?.title ? 500 : 400,
                          }}
                          className="category_name"
                        >
                          {category?.title}
                        </div>
                        <div className="category_count">
                          <div>{category?.count}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="keywords">
              <div className="keywords_title">Keywords</div>
              <div className="keywords_list">
                {Array.isArray(keywords) &&
                  keywords?.map((keyword, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          selectedKeyword === keyword
                            ? setSelectedKeyword("")
                            : setSelectedKeyword(keyword)
                        }
                        className="keyword"
                        style={{
                          border:
                            selectedKeyword === keyword
                              ? "2px solid blue"
                              : "none",
                        }}
                      >
                        <div className="keyword_name">{keyword}</div>
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

export default BlogPage;
