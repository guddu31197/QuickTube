const mongoose = require('mongoose'); 
const videoModel = require('../model/videoModel');
const videos = require("./video");



mongoose.connect("mongodb+srv://youtube:youtube@cluster0.urxx7wc.mongodb.net/?retryWrites=true&w=majority")
.then(() => {  
    console.log("database connected ");
})
.catch((error) => {
    console.log(error);
})

const importData = async() => {
    try {
        await videoModel.create(videos);
        console.log("video uploaded")
    } catch (error) {
        console.log(error)
    }
}
importData();

