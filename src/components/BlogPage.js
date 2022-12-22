import { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import { CircleLoader } from "react-spinners";
import { Link } from "react-router-dom";
import BlueArrow from "../img/Icon ionic-ios-arrow-round-forwardb.png";
import seachIcon from "../img/search-icon.svg";
import Motion from "./Motion";
import axios from "axios";
import fallback from "../img/fallbackBlog.png"


function BlogPage({ data, setLoading }) {
  const [searchLoading, setSearchLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  useEffect(() => {
    setLoadedPosts(currentData?.item?.data);
    setCategories(currentData?.types);
    setCurrentPage(currentData?.item?.meta?.pagination?.current_page);
    setTotalPages(currentData?.item?.meta?.pagination?.total_pages);
  }, [currentData]);

useEffect(() => {
  if(loadedPosts !==  []){
  setLoading(false)
}
}, [loadedPosts,setLoading]);

  const handleSearch = (e) => {
    setSearchLoading(true);
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

    setTimeout(searchPosts,1000)
  };

  const handleFilter = async (categoryTitle) => {
    setSearchLoading(true);
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
  }


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
          <PageHeader title="Blog" breadcrumbs="Home / Blog" />
        </div>
        <div className="page_content">
          <div className="blog_left">
            {searchLoading ? (
              <div style={{display:"flex",justifyContent:"center",width:"100%"}}> 
              <CircleLoader
                color="#0093de"
                size="20vh"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              </div>
            ) : (
              Array.isArray(loadedPosts) &&
              loadedPosts?.map((post,index) => {
                return (
                  <Link onClick={()=>{setLoading(true)}} to={`/blog/${post?.slug}`} style={{textDecoration:"none"}}>
                  <div key={index} className={"post"}>
                    <img onError={(e)=> e.target.src = fallback } src={post?.image} alt="post" />
                    {post?.type &&<div className="tag">
                      <h1>{post?.type}</h1>
                    </div>}
                    <div className="date">{post?.date}</div>
                    <div className="title">{post?.title}</div>
                    <div className="caption">{post?.details}</div>
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
                      <Link onClick={()=>{setLoading(true)}} to={`/blog/${post?.slug}`} className="rmb">
                        <div className="readmore">Read more </div>
                        <img className="arrow" src={BlueArrow} alt="arrow" />
                      </Link>
                    </div>
                  </div>
                  </Link>
                );
              })
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
                    display: `${currentPage !== totalPages  & !searchLoading ? "block" : "none"}`,
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
              <input onChange={handleSearch} placeholder="Search" />
              <img src={seachIcon} className="sbtn" alt="search" />
            </div>
            <div className="categories">
              <div className="categories_title">CATEGORIES</div>
              <div className="categories_list">
                <div onClick={()=>handleFilter("")} className="category">
                  <div className="category_name">All</div>
                  <div className="category_count">
                    <div>{data?.item?.meta?.pagination?.total}</div>
                  </div>
                </div>
                {categories?.map((category, index) => {
                  return (
                    <div key={index} onClick={()=>handleFilter(category?.title)} className="category">
                      <div  className="category_name">{category?.title}</div>
                      <div className="category_count">
                        <div>{category?.count}</div>
                      </div>
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
