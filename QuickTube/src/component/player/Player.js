import { useVideo } from "context/videoContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import axios from "axios";
import { useLibrary } from "context/libraryContext";
import { Model } from "component";
import "./player.css";
import { useLike } from "context/videoLikeContext";
import { useWatchLater } from "context/watchLatercontext";

export const Player = ({_id}) => {
  const { videoList, user } = useVideo();
  const { setDisplay } = useLibrary();
  const { videoListID } = useParams();
  const isVideoExist = videoList.find((ele) => ele._id === videoListID);
  const { likedVideo, getLikes } = useLike();
  const [ isLiked, setIsLiked ] = useState(false);
  useEffect(() => {
    getLikes();
  }, []);

  const {createWatchlater} = useWatchLater();
  const {createLike} = useLike();


  return (
    <div>
      <iframe
        className="video-watch-card"
        src={`https://www.youtube.com/embed/${isVideoExist?.video}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Model video={isVideoExist} />
      <p className="video-title"> {isVideoExist?.title}</p>
      <div className="view-wrapper">
        <div className="creator-image">
          <img src={isVideoExist.chanel_pic} alt="creater-image" />
        </div>
        <div className="creator-view">
          <p className="title">{isVideoExist?.creator}</p>
          <p className="view">{isVideoExist?.views}</p>
        </div>
      </div>
      <div className="watch-link ">
        <div className="like-container">
          {/* {isVideoExist._id === likeVideo._id ?
          <div className="like-button link" onClick={console.log("working")}>
            <ThumbUpAltIcon className="sidebar-symbol" />
            <p>UNLIKE</p>
          </div>: */}
          <div className="like-button link" onClick={((_id ) => createLike(isVideoExist?._id))}>
            <ThumbUpOffAltOutlinedIcon className="sidebar-symbol" />
            <p>LIKE</p>
          </div>

          <div
            className="playlist-button link"
            onClick={() => setDisplay("flex")}
          >
            {" "}
            <PlaylistAddOutlinedIcon />
            <p>SAVE TO PLAYLIST</p>
          </div>

          <div className="watch-button link" onClick={(_id ) => createWatchlater(isVideoExist?._id)}>
            {" "}
            <WatchLaterOutlinedIcon className="sidebar-symbol" />
            <p>WATCH LATER</p>
          </div>
        </div>
      </div>
      <p className="video-title">{isVideoExist.description}</p>
    </div>
  );
};
