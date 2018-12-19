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

// @route   GET api/portfolio/:id
// @desc    Get single portfolio
// @access  Public
router.get('/:id', async (req, res) => {
    const results = await Portfolio.find({ _id: req.params.id })
    return res.json(results[0])
})

module.exports = router
