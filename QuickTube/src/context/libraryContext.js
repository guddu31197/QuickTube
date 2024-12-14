import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useVideo } from "./videoContext";


const libraryContext = createContext();

const LibraryProvider = ({children}) => {

  const { user } = useVideo();
  
  const [ libraryVideo, setLibraryVideo] = useState([]);
  const [ display, setDisplay ] = useState("none");
  const [ playlistName, setPlayListName ] = useState("");
  const [ library, setLibrary ] = useState([]);
  const [ getLibraryVideo, setGetLibraryVideo ] = useState([]);
  const [ removePlaylist, setRemovePlaylist] = useState([]);

  const createLibraryVideo = async (title) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/playlist/",
        {
          "playListName": title
          
     },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
        );
        getLibrary();

    } catch (error) {
      console.log(error);
    }
  };

  const getLibrary = async () => {
    try {
      const response = await axios.get("http://localhost:5000/playlist/", {
        headers: {
          Authorization: user.encodedToken,
        },
      });
      getLibraryVideos();
      console.log(response.data);
      setLibrary(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getLibraryVideos = async (id) => {
    
    try {
      const response = await axios.get(`http://localhost:5000/playlist/get/${id}`, {
        headers: {
          authorization: user.encodedToken,
        },
      });
      console.log(response.data.videos);
      setGetLibraryVideo(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideoToLibraray = async (id,video) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/playlist/add/addVideo`,
        {
          "playlistId" : id,
          "videoId" : video
      },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
        );
        toast.success("Added in WatchLater Video")
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  const removePlayList = async (playlistId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/playlist/${playlistId}`, {
        headers: {
          'authorization': user.encodedToken
        }
      });
      console.log(response);
      toast.error("Video Removed");
      getLibrary();
      getLibraryVideos();
      // setLibrary(response.data);
    }
    catch(error){
      console.log(error)
    }
  }

 
    return(
        <libraryContext.Provider value={{  libraryVideo, getLibrary, display, setDisplay, playlistName, setPlayListName, createLibraryVideo, library, addVideoToLibraray, getLibraryVideos, getLibraryVideo, removePlayList }}>
            {children}
        </libraryContext.Provider>
    )
}

const useLibrary = () => useContext(libraryContext);

export { LibraryProvider, useLibrary }