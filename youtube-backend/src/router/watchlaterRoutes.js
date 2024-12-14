const express = require("express");
const { createWatchlater, getWatchlater, deleteWatchlater } = require("../controller/WatchlaterController");
const auth = require("../middleware/auth");
const watchlaterRouter = express.Router();

watchlaterRouter.get("/",auth, getWatchlater);
watchlaterRouter.post("/:videoId",auth, createWatchlater);
watchlaterRouter.delete("/:videoId",auth, deleteWatchlater);

module.exports = watchlaterRouter;

