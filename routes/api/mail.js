const express = require('express')
const router = express.Router()

const mail = require('../../scripts/mail')

// @route   POST api/email/sendInquiry
// @desc    Post user inquirt
// @access  Public
router.post('/send', async (req, res) => {
    const result = await mail.send(req.body)
    return res.json(result)
})

module.exports = router
