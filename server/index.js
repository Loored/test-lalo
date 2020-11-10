const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 
const datamail = path.join(DIST_DIR, '../mail-data.json');

app.use(
  [webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })],
  [webpackHotMiddleware(compiler, {
    publicPath: (HTML_FILE)
  })]
);

app.get('/api', (req, res) => { 
  res.sendFile(datamail);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html')); 
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});