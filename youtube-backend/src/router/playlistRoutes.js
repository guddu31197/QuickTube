const express = require('express');
const auth = require('../middleware/auth');
const { creatPlayList, addVideoToPlaylist, getPlayList, getPlaylistWithVideos, deletePlaylist, deleteVideoToPlaylist } = require('../controller/PlaylistController');
const playListRouter = express.Router();

playListRouter.get('/', auth,getPlayList);
playListRouter.post('/',auth,creatPlayList);
playListRouter.delete("/:playlistId", auth, deletePlaylist);
playListRouter.post('/add/addVideo',auth,addVideoToPlaylist);
playListRouter.post('/delete/deleteVideo',auth, deleteVideoToPlaylist);
playListRouter.get("/get/:playlistId", auth, getPlaylistWithVideos);

module.exports = playListRouter;
