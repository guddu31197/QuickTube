import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [filterVideo, setFilterVideo] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setFilterVideo(videoList.sort(() => Math.random() - 0.5) );
  }, [videoList]);

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const getVideoData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/video");
      setVideoList(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
 
  const getSearchVideo = async (link) => {
    try {
        const res = await axios.get(`http://localhost:5000/search?title=${link}`);
        setVideoList(res.data.myData);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getVideoData();
  }, []);


  const allFilterVideo = () => {
    setFilterVideo(videoList);
  };
  const songFilterVideo = () => {
    setFilterVideo(videoList.filter((item) => item.categoryName === "song"));
  };
  const javaScriptFilterVideo = () => {
    setFilterVideo(
      videoList.filter((item) => item.categoryName === "JavaScript")
    );
  };
  const carFilterVideo = () => {
    setFilterVideo(
      videoList.filter((item) => item.categoryName === "Sports Car")
    );
  };
  const techFilterVideo = () => {
    setFilterVideo(videoList.filter((item) => item.categoryName === "Tech"));
  };

  return (
    <videoContext.Provider
      value={{
        videoList,
        user,
        setUser,
        filterVideo,
        songFilterVideo,
        javaScriptFilterVideo,
        carFilterVideo,
        techFilterVideo,
        allFilterVideo,
        isLoading,
        setVideoList,
        getSearchVideo
      }}
    >
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
