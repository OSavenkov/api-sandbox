'use strict';

var app = require('./app.js');
var config = require('./config.js');
var server = require('http').createServer(app);

var port = process.env.PORT || config.expressPort;
server.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});