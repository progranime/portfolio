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
    technology: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
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
