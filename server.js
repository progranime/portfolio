const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const portfolio = require('./routes/api/portfolio')
const mail = require('./routes/api/mail')

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// express middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/api/portfolio', portfolio)
app.use('/api/mail', mail)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))
    // access all routes requested
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// server port
const port = process.env.PORT || 5000

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
