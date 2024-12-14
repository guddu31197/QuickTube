const express = require("express");
const playListModel = require("../model/playListModel");
const videoModel = require("../model/videoModel");

exports.getPlayList = async(req,res) => {
    try {
        const playList = await playListModel.find({});
  
      res.status(200).json(playList);
      } catch (error) {
        console.log(error);
        res.status(500).json({ messgae: "something went wrong" });
      }
}

exports.creatPlayList = async (req, res) => {
  const { playListName, video } = req.body;
  console.log({playListName, video});
  try {
    const existingPlaylist = await playListModel.findOne({playListName: playListName});
    console.log(existingPlaylist);
    if(existingPlaylist){
        return res.status(400).json({message: "PlayList Already present"});
    }
    const result = await playListModel.create({
      playListName: playListName,
      videos: video,
    });
    res.status(201).json({ result });
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "something went wrong" });
  }
};

exports.addVideoToPlaylist = async (req, res) => {
  const { playlistId, videoId } = req.body;

  try {
    // Find the playlist by ID
    const playlist = await playListModel.findById(playlistId);

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    // Find the video by ID
    const video = await videoModel.findById(videoId);
    console.log(video);

    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }

    // Add the video to the playlist
    playlist.videos.push(video);

    await playlist.save();
    console.log(playlist);

    return res.status(200).json(playlist);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error adding video to playlist' });
  }
};

exports.getPlaylistWithVideos = async (req, res) => {
  const playlistId  = req.params.playlistId;

  try {
    // Populate the videos array in the playlist
    const playlist = await playListModel.findById(playlistId).populate('videos');
    console.log(playlist, playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    return res.status(200).json(playlist);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error fetching playlist' });
  }
};

exports.deletePlaylist = async (req, res) => {
  const playlistId = req.params.playlistId;

  try {
    const playList = await playListModel.findByIdAndRemove(playlistId);
    console.log(playlistId, playList)
    res.status(202).json({ messgae: "PlayList Deleted", playList});
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
}

exports.deleteVideoToPlaylist = async (req, res) => {
  const { playlistId, videoId } = req.body;

  try {
    // Find the playlist by ID
    const playlist = await playListModel.findById(playlistId);

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    // Find the video by ID
    const video = await videoModel.findById(videoId);
    console.log(video);

    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }

    // Add the video to the playlist
    playlist.videos.pull(video);

    await playlist.save();
    console.log(playlist);

    return res.status(200).json(playlist);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error adding video to playlist' });
  }
};


