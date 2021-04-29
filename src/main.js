const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const db = require('./config/db/index')

const route = require('./routes/index')

db.connect()
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
//HTTp
app.use(morgan('combined'));

// Logger
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// console.log(__dirname);

route(app)



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
