class NewController {
    index(req, res){
        //[GET]/movie
        res.render('movie');
    }
    show(req, res){
        res.send('NEW TAIL!!');
    }
}
module.exports = new NewController