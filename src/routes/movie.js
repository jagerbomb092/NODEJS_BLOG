const express = require('express')
const router = express.Router()
const movieCOntroller = require('../app/controller/MovieController')

router.use('/:slug', movieCOntroller.show)
router.use('/', movieCOntroller.index)

module.exports = router