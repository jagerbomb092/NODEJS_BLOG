const Movie = require('../models/Movie')

class SiteController{
    index(req,res){
        // res.json({
        //     abc : '123',
        //     xyz:'abc'
        // })
        Movie.find({},function (err,movie){
            if(!err){
                res.json(movie)
                console.log(movie);
                
            }
            else{
                res.status(400).json({error:'message'})
            }
            
        })
        // res.render('home');
    }
    search(req,res){
        res.render('search');
    }
}
module.exports = new SiteController