const mongoose = require("mongoose");
const videoModel = require("./videoModel");
const userModel = require("./userModel");

const historySchema = mongoose.Schema(
    {
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

module.exports = mongoose.model("history", historySchema)