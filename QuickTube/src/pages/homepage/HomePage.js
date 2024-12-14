import { useVideo } from "context/videoContext";
import React from "react";
import { Loader, Sidebar, VideoCard } from "../../component";
import "./homepage.css";
import Chip from "@mui/material/Chip";

export const HomePage = () => {

  const { carFilterVideo, techFilterVideo, filterVideo, songFilterVideo, javaScriptFilterVideo, allFilterVideo, isLoading } = useVideo();


  return (

    <>
    {isLoading? <Loader/> :
      <div className="video-listing-container">
        <Sidebar />
        <div className="wrapping">
          <Chip label="All" variant="outlined" className="video-filter" style={{color: "white", margin: "5px"}} onClick={allFilterVideo} />
          <Chip label="JavaScript" variant="outlined" className="video-filter" style={{color: "white", margin: "5px"}} onClick={javaScriptFilterVideo} />
          <Chip label="Song" variant="outlined" className="video-filter" style={{color: "white", margin: "5px"}} onClick={songFilterVideo}/>
          <Chip label="Car" variant="outlined" className="video-filter" style={{color: "white", margin: "5px"}} onClick={carFilterVideo}/>
          <Chip label="Tech" variant="outlined" className="video-filter" style={{color: "white", margin: "5px"}} onClick={techFilterVideo}/>

          <div className="videocard-list">
            {filterVideo.map((videos) => (
              <VideoCard
                video={videos}
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
      </div>
}
    </>
  );
};
