var app = require('./src/server/server.js').app;
var debug = require('debug')('www:server');
var server = require('./src/server/server.js').server;


app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
});
