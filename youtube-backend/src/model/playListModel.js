const mongoose = require("mongoose");
const userModel = require("./userModel");
const videoModel = require("./videoModel");



const playListSchema = mongoose.Schema({
    playListName: {
        type: String,
        required: true
    },
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: videoModel,
      }],
   
}, {timestamps: true}) 

/*{
    videosId = []
    playListNmae = String
    userId = mongooose schema array

} */

module.exports = mongoose.model("playlist", playListSchema)


  