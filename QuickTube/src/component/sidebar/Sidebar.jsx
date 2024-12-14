import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";

export const Sidebar = () => {
  return (
    
      <div className="sidebar-container">
        <Link to="/">
          <div className="link" >
            <HomeOutlinedIcon className="sidebar-symbol " sx={{fontSize: 35}} />
            <p className="sidebar-subtitle">Home</p>
          </div>
        </Link>
        <Link to="/library">
          <div className="link">
            <VideoLibraryOutlinedIcon className="sidebar-symbol " sx={{fontSize: 35}} />
            <p className="sidebar-subtitle">Library</p>
          </div>
        </Link>
        <Link to="/history">
          <div className="link">
            <RestoreOutlinedIcon className="sidebar-symbol" sx={{fontSize: 35}} />
            <p className="sidebar-subtitle">History</p>
          </div>
        </Link>
        <Link to="/watchlater">
          <div className="link">
            <WatchLaterOutlinedIcon className="sidebar-symbol" sx={{fontSize: 35}} />
            <p className="sidebar-subtitle">Watch Later</p>
          </div>
        </Link>
        <Link to="/liked">
          <div className="link">
            <ThumbUpOffAltOutlinedIcon className="sidebar-symbol" sx={{fontSize: 35}} />
            <p className="sidebar-subtitle">Liked Videos</p>
          </div>
        </Link>
      </div>
   
  );
};
