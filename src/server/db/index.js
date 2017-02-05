var monk = require('monk');

var uri = (process.env.MONGO_PORT_27017_TCP_ADDR || "localhost")
          + ":"
          + (process.env.MONGO_PORT_27017_TCP_PORT || "27017")
          + "/prattle"
var db = monk(uri);

module.exports = db;
