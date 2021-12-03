var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var productRouter = require('./routes/product');

var app = express();

app.use(logger('dev'));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontreact/build')));

app.use('/api/products', productRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontreact/build/index.html'));
});

module.exports = app;
