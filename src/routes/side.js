const express = require('express')
const router = express.Router()
const sideCOntroller = require('../app/controller/SiteController')

router.use('/search', sideCOntroller.search)
router.use('/', sideCOntroller.index)

module.exports = router