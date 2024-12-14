import { useVideo } from "context/videoContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./videocard.css";
import axios from "axios";
import { useHistory } from "context/historyContext";

export const VideoCard = ({
  thumbnail,
  chanel_pic,
  title,
  creator,
  views,
  _id,
  video,
}) => {
  const {createHistory} = useHistory();
  return (
    <>
      <div className="video-card" onClick={() => createHistory(_id)}>
        <Link to={`/watch/${_id}`}>
          <div className="video-image">
            <img src={thumbnail} alt="video thumbnail" />
          </div>
          <div className="video-title-wrapper">
            <div className="video-image">
              <img src={chanel_pic} alt="video card" />
            </div>
            <div className="video-title">
              <p className="description">{title}</p>
              <div className="view-text">
                <span>{views}</span> <span>{creator}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
