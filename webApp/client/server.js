var express = require('express');
var server = express();
server.use(express.static(__dirname));

// var port = process.env.PORT || 8081;
// server.listen(port);

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000
, ip = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";

server.listen(port, ip , function() {
  console.log('Express server listening on %d', port);
});

exports = module.exports = server;
