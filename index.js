'use strict';
const port = process.env.PORT;
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(logger('dev'));
app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: './public'
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

app.listen(port || 3000);
console.log(` 🌐  listening on port ${port || 3000} in ${app.get('env')} mode. 😄`);
