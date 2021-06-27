const express = require('express');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

// Luồng đi: src -> route -> controller

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// Hiển thị log khi gửi request
// app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.use(methodOverride('_method'));
//Route Init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
