const videoModel = require("../model/videoModel");

exports.getVideo = async (req,res) => {
    try {
        const videos = await videoModel.find({});
        res.status(200).json(videos);
      } catch (error) {
        console.log(error);
        res.status(500).json({ messgae: "something went wrong" });
      }
}

exports.getSearch = async(req, res) => {
  const {title} = req.query;
  console.log(title);
  const queryObject = {};

  if(title){
      queryObject.title = {$regex: title, $options:"i"};
  }
  console.log(queryObject);
  const myData = await videoModel.find(queryObject);
  res.status(200).json({myData});

}