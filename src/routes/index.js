function route(app){
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.get('/movie', (req, res) => {
        res.render('movie');
    });
    app.get('/search', (req, res) => {
        res.render('search');
    });
    
    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('');
    });
}

module.exports = route