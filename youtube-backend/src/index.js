const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
// const videos = require("./db/video");

const historyRouter = require("./router/historyRoutes");
const likeRouter = require("./router/likeRoutes");
const userRouter = require("./router/userRoutes");
const watchlaterRouter = require("./router/watchlaterRoutes");
const videoRouter = require("./router/videoRoutes");
const videoModel = require("./model/videoModel");
const playListRouter = require("./router/playlistRoutes");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000

app.use("/user", userRouter);
app.use("/", historyRouter);
app.use("/watchlater", watchlaterRouter);
app.use("/like", likeRouter);
app.use("/", videoRouter);
app.use("/playlist", playListRouter);

mongoose
  .connect(
    "mongodb+srv://youtube:youtube@cluster0.urxx7wc.mongodb.net/"
  )
  .then(() => {
    console.log("database connected ");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server is started");
});
