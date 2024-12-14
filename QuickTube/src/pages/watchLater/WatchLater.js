import React, { useEffect } from "react";
import { RemoveCard, Sidebar } from "component";
import { useWatchLater } from "context/watchLatercontext";
import { Link } from "react-router-dom";

export const WatchLater = () => {
  const { watchLater, getWatchLater, removeWatchVideo } = useWatchLater();

  useEffect(()=>{
    getWatchLater();
  },[])

  return (
    <div className="video-listing-container">
      <Sidebar />
      {watchLater?.length === 0 ? (
            <div className="login-page-container">
          <div className="no-video-present">
              <h1 className="title-text"> There is no WatchLater Video 😢 </h1>
              <Link to="/" className="explore-button">
                Explore Video
              </Link>
            </div>
          </div>
        ) : (

      <div className="videocard-list">
        {watchLater?.map((videos) => (
          <RemoveCard
            key={videos._id}
            removeFn={removeWatchVideo}
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
   )}
    </div>
  );
};
