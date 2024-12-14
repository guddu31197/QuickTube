const likeModel = require("../model/likeModel");
const videoModel = require("../model/videoModel");

exports.createLike = async (req, res) => {
  const videoId = req.params.videoId;
  const userId = req.userId;
  try {
    const video = await videoModel.findById(videoId);
    if (!video) {
      throw { error: "there is no video" };
    }
    const existLike = await likeModel.findOne({ video: { _id: videoId } });
    if (existLike) {
      return res.status(400).json({ message: "user Already exist" });
    }
    const like = await likeModel.create({
      video: videoId,
      userId: userId,
    });
    if (!like) {
      throw { error: "Something went wrong" };
    }
    res.status(202).json({ messgae: "like created sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
};

exports.getLikeVideos = async (req, res) => {
  try {
    const like = await likeModel
      .where("userId")
      .equals(req.userId)
      .populate("video");

    res.status(200).json(like);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
};

exports.deleteLike = async (req, res) => {
  const videoId = req.params.videoId;
  try {
    const like = await likeModel.findByIdAndRemove(videoId);
    res.status(202).json(like);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
};
