'use strict';
var express = require('express');
var OrganizationsController = require('./routes/OrganizationsController');

var app = express();
app.use('/organizations', OrganizationsController);
app.use(function(req, res, next) {
    var nodeSSPI = require('node-sspi');
    var nodeSSPIObj = new nodeSSPI({
        retrieveGroups: true
    });
    nodeSSPIObj.authenticate(req, res, function(err) {
        res.finished || next();
    });
});
app.use(function(req, res, next) {
    console.log(req.connection);
    var out = 'Hello ' + req.connection.user + '! You belong to following groups:<br/><ul>';
    if (req.connection.userGroups) {
        for (var i in req.connection.userGroups) {
            out += '<li>' + req.connection.userGroups[i] + '</li><br/>\n';
        }
    }
    out += '</ul>';
    res.send(out);
});

module.exports = app;