const path = require('path');  
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// for the router
app.use('/', home);

const PORT = 2000;
app.listen(
  PORT,
  () => { console.log(`ð» Server listening on http://localhost:${PORT}`); }
);
