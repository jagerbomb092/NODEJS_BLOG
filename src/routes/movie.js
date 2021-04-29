const express = require('express')
const router = express.Router()
const movieCOntroller = require('../app/controller/MovieController')

router.get('/:slug', movieCOntroller.show)
router.get('/', movieCOntroller.index)

module.exports = router