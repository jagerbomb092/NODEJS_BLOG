const express = require('express')
const router = express.Router()
const sideCOntroller = require('../app/controller/SiteController')

router.get('/search', sideCOntroller.search)
router.get('/', sideCOntroller.index)

module.exports = router