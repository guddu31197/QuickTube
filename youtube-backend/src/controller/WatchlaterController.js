const videoModel = require("../model/videoModel");
const watchlaterModel = require("../model/watchlaterModel");

exports.createWatchlater = async (req, res) => {
  const videoId = req.params.videoId;
  const userId = req.userId;
  try {
    const video = await videoModel.findById(videoId);
    if (!video) {
      throw { error: "there is no video" };
    }
    const existWatchlater = await watchlaterModel.findOne({video :{ _id : videoId}});
    if (existWatchlater) {
      return res.status(400).json({ message: "user Already exist" });
    }
    const watchlater = await watchlaterModel.create({
      video: videoId,
      userId: userId,
    }); 
    if (!watchlater) {
      throw { error: "Something went wrong" };
    }
    res.status(202).json({ messgae: "watchLater created sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
};

exports.getWatchlater = async(req,res) => {
    try {
        const watchLater = await watchlaterModel
        .where("userId")
        .equals(req.userId)
        .populate("video");
  
      res.status(200).json(watchLater);
      } catch (error) {
        console.log(error);
        res.status(500).json({ messgae: "something went wrong" });
      }
}

exports.deleteWatchlater = async (req, res) => {
    const videoId = req.params.videoId;
    try {
        const watchlater = await watchlaterModel.findByIdAndRemove(videoId);
        res.status(202).json(watchlater);
    } catch (error) {
        console.log(error);
        res.status(500).json({messgae: "something went wrong"});
    }
}