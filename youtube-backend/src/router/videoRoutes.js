const express = require("express");
const { getVideo, getSearch } = require("../controller/VideoController");
const videoModel = require("../model/videoModel");
const videoRouter = express.Router();

videoRouter.get("/video", getVideo);
videoRouter.get("/search", getSearch)

module.exports = videoRouter;