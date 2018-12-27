const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const OnlineCode = new Schema({
    imgSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    editor: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('online-codes', OnlineCode)
