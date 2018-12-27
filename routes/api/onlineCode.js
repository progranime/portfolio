const express = require('express')
const router = express.Router()

const OnlineCode = require('../../models/onlineCode')

router.get('/', async (req, res) => {
    const results = await OnlineCode.find()
    return res.json(results)
})

module.exports = router
