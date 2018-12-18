const express = require('express')
const router = express.Router()

// Schemas
const Portfolio = require('../../models/portfolio')

// @route   GET api/portfolio/
// @desc    Get all portfolio
// @access  Public
router.get('/', async (req, res) => {
    const results = await Portfolio.find()
    return res.json(results)
})

module.exports = router
