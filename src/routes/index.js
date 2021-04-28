const movieRouter = require('./movie')
const  siteRouter = require('./side')
function route(app){
    app.use('/movie',movieRouter)
    app.use('/',siteRouter)
}

module.exports = route