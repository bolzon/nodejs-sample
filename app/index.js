
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

let app = express();
app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(cors({
    exposedHeaders: [
      'Content-Length',
      'Authorization',
      'X-Total-Count'
    ]
  }));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(helmet());
app.use('/', routes);

module.exports = app;