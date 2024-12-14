const mongoose = require("mongoose");
const userModel = require("./userModel");
const videoModel = require("./videoModel");

const watchlaterSchema = mongoose.Schema({
    
        video: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: videoModel,
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: userModel,
        },
      },
      { timestamps: true }
    );
module.exports = mongoose.model("watchlater", watchlaterSchema)