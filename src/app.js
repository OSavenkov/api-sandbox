'use strict';
var express = require('express');
var config = require('./config.js');
var SearchController = require('./routes/SearchController');

var app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", config.allowesOrigins);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(function(req, res, next) {
    var nodeSSPI = require('node-sspi');
    var nodeSSPIObj = new nodeSSPI({
        retrieveGroups: true
    });
    nodeSSPIObj.authenticate(req, res, function(err) {
        res.finished || next();
    });
});
app.use('/api/search', SearchController);
// app.use(function(req, res, next) {
//     var out = 'Hello ' + req.connection.user + '! You belong to following groups:<br/><ul>';
//     if (req.connection.userGroups) {
//         for (var i in req.connection.userGroups) {
//             out += '<li>' + req.connection.userGroups[i] + '</li><br/>\n';
//         }
//     }
//     out += '</ul>';
//     res.send(out);
// });

module.exports = app;