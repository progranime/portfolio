const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PortfolioSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: String,
        require: true
    },
    technology: {
        type: String,
        required: true
    },
    gallery: {
        type: Array,
        required: true
    },
    task: {
        type: Array,
        required: true
    },
    date_created: {
        type: Date
    },
    date_finished: {
        type: Date
    }
})

module.exports = mongoose.model('portfolios', PortfolioSchema)
