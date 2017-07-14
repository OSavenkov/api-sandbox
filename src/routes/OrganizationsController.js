var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Organization = require('../model/Organization.js');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {

});
router.get('/', function(req, res) {
    Organization.findAll().then(organizations => {
        res.send(organizations);
    })
});
module.exports = router;