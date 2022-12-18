import { useState, useEffect } from "react";
import Motion from "./Motion";
import PageHeader from "./PageHeader";
import ReactPlayer from "react-player";
import { Modal, Box } from "@mui/material";
import playIcon from "../img/play.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MediaPage({ data }) {
  const [selected, setSelected] = useState("all");
  const [images, setImages] = useState(null);
  const [videos, setVideos] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [openImageModal, setOpenImageModal] = useState(false);
  const [openVideoModal, setOpenVideoModal] = useState(false);

  useEffect(() => {
    Array.isArray(data?.sub) &&
      setImages(
        (data?.sub?.filter((x) => {
         return x.title === "images" ? true : false
        }))[0]?.sub
      );

    Array.isArray(data?.sub) &&
      setVideos(
        (data?.sub?.filter((x) => {
          return x.title === "videos" ? true : false
        }))[0]?.sub
      );
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

  return (
    <Motion>
      <div className="head_bg">
        <PageHeader title="Media" breadcrumbs={"Home / Media"} />
      </div>
      <div className="media_header">
        <h1>{data?.title}</h1>
      </div>
      <div className="media_tabs">
        <div
          className={
            selected === "all" ? "media_tab_active" : "media_tab_inactive"
          }
        onClick={()=>setSelected("all")}
        >
          All
        </div>
        <div
          className={
            selected === "images" ? "media_tab_active" : "media_tab_inactive"
          }
          onClick={()=>setSelected("images")}

        >
          Images
        </div>
        <div
          className={
            selected === "videos" ? "media_tab_active" : "media_tab_inactive"
          }
          onClick={()=>setSelected("videos")}

        >
          Videos
        </div>
      </div>
      <div className="media">
        <div style={{ display: "flex", flexWrap: "wrap" }} className="images">
          {Array.isArray(images) && (selected !== "videos") &&
            images.map((image,index) => {
              return (
                <LazyLoadImage
                placeholder={<h1>asdasd</h1>}
                loading="lazy"
                key={index}
                  className="image_thumb"
                  onClick={() => {
                    handleOpenImageModal(image?.description);
                  }}
                  src={image?.image}
                  alt="image_thumb"
                />
              );
            })}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }} className="videos">
          {Array.isArray(videos) && (selected !== "images") &&
            videos.map((video,index) => {
              return (
                <div key={index} className="video_thumb_container">
                  <img src={playIcon} alt="playIcon" className="playIcon" />
                  <img
                    className="video_thumb"
                    onClick={() => {
                      handleOpenVideoModal(video?.description);
                    }}
                    src={video?.image}
                    alt="video_thumb"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Modal open={openImageModal} onClick={handleCloseImageModal}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img className="media_image" src={imageUrl} alt="media_image" />
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
