import React from "react";
import { RemoveCard, Sidebar } from "component";
import { useEffect } from "react";
import { useLibrary } from "context/libraryContext";
import "./library.css";
import { Link } from "react-router-dom";

export const Library = () => {
  const {
    getLibrary,
    library,
    getLibraryVideos,
    getLibraryVideo,
    removePlayList
  } = useLibrary();
  useEffect(() => {
    getLibrary();
  }, []);
  library.map(item => console.log(...item.videos));
  console.log(getLibraryVideo.map(item => item._id  ));
  return (
    <>
      <div className="video-listing-container">
        <Sidebar />
        {library?.length === 0 ? (
          <div className="login-page-container">
            <div className="no-video-present">
              <h1 className="title-text"> There is no PlayList 😢 </h1>
              <Link to="/" className="explore-button">
                Explore Video
              </Link>
            </div>
          </div>
        ) : (
          <div className="playlist-lists">
            {library?.map((item) => (
              <div
                className="playlists"
                onClick={() => getLibraryVideos(item._id)}
                key={item._id}
              >
                {item.playListName}
                <button onClick={() => removePlayList(item._id) }>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="videocard-list">
          {getLibraryVideo?.map((videos) => (
            <RemoveCard
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
    </>
  );
};
