import { useLibrary } from "context/libraryContext";
import React, { useEffect } from "react";
import "./model.css";
export const Model = ({ video }) => {
  const {
    display,
    setDisplay,
    playlistName,
    setPlayListName,
    createLibraryVideo,
    library,
    addVideoToLibraray,
    getLibrary
  } = useLibrary();
  const modelCloseHandler = () => {
    setDisplay("none");
  };

  useEffect(() => {
    getLibrary();
  },[])
  console.log(library);

  return (
    <>
      <div className="model-page-container" style={{ display: display }}>
        <div className="modal-section">
          <div className="title-container">
            <h2 className="login-tilte">Save To:</h2>
            <p className="login-tilte" onClick={modelCloseHandler}>
              <i className="fa fa-times"></i>
            </p>
          </div>
         
            {library?.map((item) => (
              

              <div className="playlist-list"
                onClick={() => addVideoToLibraray(item._id, video)}
                key={item._id}
              >
                {item.playListName}
              </div>
            ))}
        
          <span className="input-label">PlayList Name: </span>
          <input
            type="text"
            value={playlistName}
            className="input-section"
            onInput={(e) => setPlayListName(e.target.value)}
          />
          <button
            className="login-button"
            onClick={() => {
              createLibraryVideo(playlistName);
              setPlayListName("");
            }}
          >
            Create PlayList
          </button>
        </div>
      </div>
    </>
  );
};
