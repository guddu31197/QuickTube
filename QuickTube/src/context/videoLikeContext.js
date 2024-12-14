import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useVideo } from "./videoContext";


const videoLikeContext = createContext();

const LikeProvider = ({children}) => {

  const { user } = useVideo();
  
  const [likedVideo, setLikedVideo] = useState([]);


  const getLikes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/like", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      var likeId = response.data.map((item) => item._id);
      var video = response.data.map((item) => item.video);
      for (let i = 0; i < video.length; i++) {
        video[i].id = likeId[i];
      }
      setLikedVideo(video);
    } catch (error) {
      console.log(error);
    }
  };
 
  const removeLike = async (videoID) => {
    try {
      const response = await axios.delete(`http://localhost:5000/like/${videoID}`, {
        headers: {
          'authorization': user.encodedToken
        }
      });
      setLikedVideo((prev => prev.filter(item => item.id !== videoID)));
      toast.error("Liked Video Removed")
    }
    catch(error){
      console.log(error)
    }
  }
  
  const createLike = async (videoID) => {
    try {
      const response = await axios.post(`http://localhost:5000/like/${videoID}`,{}, {
        headers: {
          'Authorization': user.encodedToken
        }
      });
      console.log(response);
      toast.success("Video Liked");
    }
    catch(error){
      console.log(error)
    }
  }
 
    return(
        <videoLikeContext.Provider value={{ removeLike, likedVideo, getLikes, createLike }}>
            {children}
        </videoLikeContext.Provider>
    )
}

const useLike = () => useContext(videoLikeContext);

export { LikeProvider, useLike }