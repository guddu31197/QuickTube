import { useVideo } from "context/videoContext";
import React from "react";
import { Link } from "react-router-dom";
import './suggestion.css'
import axios from "axios";
import { useHistory } from "context/historyContext";

export const SuggestionCard = ({
  thumbnail,
  chanel_pic,
  title,
  creator,
  views,
  _id,
  video
}) => {
  const { HistoryVideo } = useHistory();

  return (
    <>
      <div className="suggestion-card-wrapper" onClick={HistoryVideo }>
        <Link to={`/watch/${_id}`}>
          <div className="suggest-card">
            <div className="suggestion-card-image">
              <img src={thumbnail} alt="video thumbnail" />
            </div>
            <div className="video-title-wrapper">
              <div className="video-image">
                <img src={chanel_pic} alt="" />
              </div>
              <div className="video-title">
                <p className="description">{title}</p>
                <p className="view-text">{creator}</p>
                <p className="view-text">{views} view</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
