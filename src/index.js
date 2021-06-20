const express = require('express')
const morgan = require('morgan')
const app = express();
const handlebars  = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes')


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
// Hiển thị log khi gửi request
// app.use(morgan('combined')); 

// Template engine
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources//views'))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    res.render('search');
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});