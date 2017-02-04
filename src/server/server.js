var path = require('path')
    , express = require('express');

var buildPath = express.static(path.resolve(__dirname, '../client/public'));
var indexPath = path.resolve(__dirname, '../client/index.html');

var app = express();
app.use('/public', buildPath);
app.get('/', (req, res) => { res.sendFile(indexPath)})


module.exports = app;
