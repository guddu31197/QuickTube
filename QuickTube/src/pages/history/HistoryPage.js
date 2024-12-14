import React, { useEffect } from "react";
import { RemoveCard, Sidebar } from "component";
import { Link } from "react-router-dom";
import { useHistory } from "context/historyContext";
import './history.css'

export const HistoryPage = () => {
    const { getHistory, historyVideo, removeHistory, removeHistoryAll } = useHistory();

    useEffect(()=>{
        getHistory();
    },[])
  return (
    <>
      <div className="video-listing-container">
        <Sidebar />
        {historyVideo?.length === 0 ? (
            <div className="login-page-container">
          <div className="no-video-present">
              <h1 className="title-text"> You Have Nothing Explore Yet 😢 </h1>
              <Link to="/" className="explore-button">
                Explore Video
              </Link>
            </div>
          </div>
        ) : (
          <>
          <div className="playlists" onClick={removeHistoryAll}>
          <button  className="removeall">removeAll <i className="fa fa-trash"></i></button>
          </div>
          <div className="videocard-list">
            {historyVideo?.map((videos) => (
              <RemoveCard
                key={videos._id}
                removeFn={removeHistory}
                _id={videos._id}
                title={videos.title}
                views={videos.views}
                creator={videos.creator}
                chanel_pic={videos.chanel_pic}
                thumbnail={videos.thumbnail}
                id={videos.id}
              />
            ))}
          </div>
      </>
        )}
      </div>

    </>
  );
};
