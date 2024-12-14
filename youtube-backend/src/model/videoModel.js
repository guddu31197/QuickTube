const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        default: ""
    },
    chanel_pic: {
        type: String,
        default: ""
    },
    creator: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    }
   
}, {timestamps: true}) 

module.exports = mongoose.model("video", VideoSchema)