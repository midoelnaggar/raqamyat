import { useState, useEffect } from "react";
import Motion from "./Motion";
import PageHeader from "./PageHeader";
import ReactPlayer from "react-player";
import { Modal, Box } from "@mui/material";
import playIcon from "../img/play.svg";
import fallback from "../img/fallbackWebinar.jpg";
import axios from "axios";

export default function MediaPage({ data }) {
  const [selected, setSelected] = useState("all");
  const [all, setAll] = useState([]);
  const [currentPageAll, setCurrentPageAll] = useState(1);
  const [totalPagesAll, setTotalPagesAll] = useState(0);
  const [images, setImages] = useState([]);
  const [currentPageImages, setCurrentPageImages] = useState(1);
  const [totalPagesImages, setTotalPagesImages] = useState(0);
  const [videos, setVideos] = useState([]);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentPageVideos, setCurrentPageVideos] = useState(1);
  const [totalPagesVideos, setTotalPagesVideos] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [openImageModal, setOpenImageModal] = useState(false);
  const [openVideoModal, setOpenVideoModal] = useState(false);

  useEffect(() => {
    setAll(data?.data);
    setCurrentPageAll(data?.meta?.pagination?.current_page);
    setTotalPagesAll(data?.meta?.pagination?.total_pages);
    const getInitialImagesAndVideos = async () => {
      try {
        const imagesRes = await axios.get(
          "https://newraq.raqamyat.com/public/api/services?slug=photos"
        );
        setImages(await imagesRes?.data?.data?.data);
        setCurrentPageImages(
          await imagesRes?.data?.data?.meta?.pagination?.current_page
        );
        setTotalPagesImages(
          await imagesRes?.data?.data?.meta?.pagination?.total_pages
        );
        const videosRes = await axios.get(
          "https://newraq.raqamyat.com/public/api/services?slug=videos"
        );
        setVideos(await videosRes?.data?.data?.data);
        setCurrentPageImages(
          await videosRes?.data?.data?.meta?.pagination?.current_page
        );
        setTotalPagesVideos(
          await videosRes?.data?.data?.meta?.pagination?.total_pages
        );
      } catch (error) {
        console.log(error?.message);
      }
    };
    getInitialImagesAndVideos();
  }, [data]);

  const handleOpenImageModal = (url) => {
    setImageUrl(url);
    setOpenImageModal(true);
  };

  const handleOpenVideoModal = (url) => {
    setVideoUrl(url);
    setOpenVideoModal(true);
  };

  const handleCloseImageModal = () => {
    setOpenImageModal(false);
  };

  const handleCloseVideoModal = () => {
    setOpenVideoModal(false);
  };

  const handleLoadMoreAll = async () => {
    setLoadMoreLoading(true);
    const res = await axios.get(
      `https://newraq.raqamyat.com/public/api/services?slug=media&page=${
        currentPageAll + 1
      }`
    );
    setAll(all.concat(await res?.data?.data?.data));
    setCurrentPageAll(await res?.data?.data?.meta?.pagination?.current_page);
    setTotalPagesAll(await res?.data?.data?.meta?.pagination?.total_pages);
    setLoadMoreLoading(false);
  };

  const handleLoadMoreImages = async () => {
    setLoadMoreLoading(true);
    const res = await axios.get(
      `https://newraq.raqamyat.com/public/api/services?slug=photos&page=${
        currentPageAll + 1
      }`
    );
    setImages(images.concat(await res?.data?.data?.data));
    setCurrentPageImages(await res?.data?.data?.meta?.pagination?.current_page);
    setTotalPagesImages(await res?.data?.data?.meta?.pagination?.total_pages);
    setLoadMoreLoading(false);
  };

  const handleLoadMoreVideos = async () => {
    const res = await axios.get(
      `https://newraq.raqamyat.com/public/api/services?slug=videos&page=${
        currentPageAll + 1
      }`
    );
    setVideos(videos.concat(await res?.data?.data?.data));
    setCurrentPageVideos(await res?.data?.data?.meta?.pagination?.current_page);
    setTotalPagesVideos(await res?.data?.data?.meta?.pagination?.total_pages);
    setLoadMoreLoading(false);
  };

  return (
    <Motion>
      <div className="head_bg">
        <PageHeader title="Media" breadcrumbs={"Home / Media"} />
      </div>
      <div className="media_header">
        <h1>
          Raqamyat team is committed to deliver revenue throughout successful
          projects
        </h1>
      </div>
      <div className="media_tabs">
        <div
          className={
            selected === "all" ? "media_tab_active" : "media_tab_inactive"
          }
          onClick={() => setSelected("all")}
        >
          All
        </div>
        <div
          className={
            selected === "images" ? "media_tab_active" : "media_tab_inactive"
          }
          onClick={() => setSelected("images")}
        >
          Images
        </div>
        <div
          className={
            selected === "videos" ? "media_tab_active" : "media_tab_inactive"
          }
          onClick={() => setSelected("videos")}
        >
          Videos
        </div>
      </div>
      <div className="media">
        {selected === "all" ? (
          Array.isArray(all) && all.length > 0 ? (
            all.map((item, index) => {
              return (
                <div className="image_thumb_container video_thumb_container">
                  <img
                    style={{
                      display: item?.link?.startsWith(
                        "https://newraq.raqamyat.com"
                      )
                        ? "none"
                        : "block",
                    }}
                    src={playIcon}
                    alt="playIcon"
                    className="playIcon"
                  />
                  <img
                    onError={(e) => (e.target.src = fallback)}
                    loading="lazy"
                    key={index}
                    className="image_thumb"
                    onClick={() => {
                      if (
                        item?.link?.startsWith("https://newraq.raqamyat.com")
                      ) {
                        handleOpenImageModal(item?.link);
                      } else {
                        handleOpenVideoModal(item?.link);
                      }
                    }}
                    src={item?.link}
                    alt="image_thumb"
                  />
                </div>
              );
            })
          ) : (
            <div style={{padding:0}} className="noResults">No Media Found.</div>
          )
        ) : selected === "images" ? (
          Array.isArray(images) && images.length > 0 ? (
            images.map((image, index) => {
              return (
                <div className="image_thumb_container">
                  <img
                    onError={(e) => (e.target.src = fallback)}
                    loading="lazy"
                    key={index}
                    className="image_thumb"
                    onClick={() => {
                      handleOpenImageModal(image?.link);
                    }}
                    src={image?.link}
                    alt="image_thumb"
                  />
                </div>
              );
            })
          ) : (
            <div style={{padding:0}} className="noResults">No Images Found.</div>
          )
        ) : selected === "videos" ? (
          Array.isArray(videos) && videos.length > 0 ? (
            videos.map((video, index) => {
              return (
                <div className="image_thumb_container video_thumb_container">
                  <img src={playIcon} alt="playIcon" className="playIcon" />
                  <img
                    onError={(e) => (e.target.src = fallback)}
                    loading="lazy"
                    key={index}
                    className="image_thumb"
                    onClick={() => {
                      handleOpenVideoModal(video?.link);
                    }}
                    src={video?.link}
                    alt="image_thumb"
                  />
                </div>
              );
            })
          ) : (
            <div style={{padding:0}} className="noResults">No Videos Found.</div>
          )
        ) : (
          <></>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "170px",
        }}
      >
        <button
          onClick={
            selected === "all"
              ? handleLoadMoreAll
              : selected === "images"
              ? handleLoadMoreImages
              : selected === "videos" && handleLoadMoreVideos
          }
          style={{
            display: `${
              selected === "all"
                ? currentPageAll !== totalPagesAll
                  ? "block"
                  : "none"
                : selected === "images"
                ? currentPageImages !== totalPagesImages
                  ? "block"
                  : "none"
                : selected === "videos" &&
                  currentPageVideos !== totalPagesVideos
                ? "block"
                : "none"
            }`,
          }}
          className="loadMoreBtn"
        >
          Load More
        </button>
      </div>
      <Modal open={openImageModal} onClick={handleCloseImageModal}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            onError={(e) => (e.target.src = fallback)}
            className="media_image"
            src={imageUrl}
            alt="media_image"
          />
        </Box>
      </Modal>
      <Modal open={openVideoModal} onClick={handleCloseVideoModal}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ReactPlayer url={videoUrl} />
        </Box>
      </Modal>
    </Motion>
  );
}
