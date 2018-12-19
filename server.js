const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
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

// server port
const port = process.env.PORT || 5000

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
