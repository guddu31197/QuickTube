const express = require("express");
const auth = require("../middleware/auth");
const {getHistoryVideos, createHistory, deleteHistory, deleteAllHistory} = require("../controller/HistoryController")
const historyRouter = express.Router();

historyRouter.get("/history",auth, getHistoryVideos);
historyRouter.post("/history/:videoId", auth, createHistory)
historyRouter.delete("/history/:id", auth, deleteHistory)
historyRouter.delete("/historydeleteAll",auth, deleteAllHistory)

module.exports = historyRouter;

 