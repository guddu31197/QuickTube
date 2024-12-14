import { Loader, Sidebar, SuggestionCard } from "component";
import { useVideo } from "context/videoContext";
import React from "react";
import { Outlet } from "react-router-dom";
import "./watchpage.css";

export const WatchPage = () => {
  const { videoList, isLoading } = useVideo();

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
    <div className="watchpage-container">
      <Sidebar />
      <div className="suggestion-cardlist">
        <Outlet />
        {videoList.map((videos) => (
          <SuggestionCard
            key={videos._id}
            _id={videos._id}
            title={videos.title}
            views={videos.views}
            creator={videos.creator}
            chanel_pic={videos.chanel_pic}
            thumbnail={videos.thumbnail}
          />
        ))}
      </div>
    </div>
)}
    </>
  );
};
