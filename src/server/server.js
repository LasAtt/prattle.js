var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cookieParser = require('cookie-parser');

app.use(cookieParser);

var path = require('path');

var db = require('./db');
var router = require('./routes');
var socket = require('./socket')(io, db);

var buildPath = express.static(path.resolve(__dirname, '../client/public'));
var indexPath = path.resolve(__dirname, '../client/index.html');

app.use((req, res, next) => {
  req.db = db
  next();
});
app.use('/api', router);
app.use('/public', buildPath);
app.get('/', (req, res) => { res.sendFile(indexPath)})

io.on('connection', socket);

module.exports = {
  app: app,
  server: server
}
