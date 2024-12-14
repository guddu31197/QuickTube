import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useVideo } from "./videoContext";

const watchContext = createContext();

const WatchProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  const { user } = useVideo();

  const getWatchLater = async () => {
    try {
      const response = await axios.get("http://localhost:5000/watchlater", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      var watchLaterId = response.data.map((item) => item._id);
      var video = response.data.map((item) => item.video);
      for (let i = 0; i < video.length; i++) {
        video[i].id = watchLaterId[i];
      }
      setWatchLater(video);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchVideo = async (videoID) => {
    console.log(videoID);
    try {
      const response = await axios.delete(`http://localhost:5000/watchlater/${videoID}`, {
        headers: {
          authorization: user.encodedToken,
        },
      });
      setWatchLater(prev => prev.filter(item => item.id !== videoID));
      toast.error("Video Removed");
    } catch (error) {
      console.log(error);
    }
  };

  const createWatchlater = async (videoID) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/watchlater/${videoID}`,
        {},
        {
          headers: {
            Authorization: user.encodedToken,
          },
        }
      );
      toast.success("Video Added to watchlater");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <watchContext.Provider
      value={{ watchLater, getWatchLater, removeWatchVideo, createWatchlater }}
    >
      {children}
    </watchContext.Provider>
  );
};
const useWatchLater = () => useContext(watchContext);

export { WatchProvider, useWatchLater };
