var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Organizations = require('../model/Organizations.js');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {

});
router.get('/', function(req, res) {
    Organizations.findAll({where: {
        Id:4
    }}).then(organizations => {
        res.send(organizations);
    });
});
module.exports = router;