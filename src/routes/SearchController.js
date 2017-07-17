var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var authorize = require('../authorize.js');
var criteriaFactory = require('../data/criteriaFactory.js');
var Organizations = require('../data/model/Organizations.js');
var CorpUser = require('../data/model/CorpUser.js');

router.use(bodyParser.urlencoded({ extended: true }));
// router.use(authorize('HQ\\Администраторы Kaspi Red'));
router.use(authorize('\\Everyone'));
router.post('/', function(req, res, next) {

});
router.get('/:criteria', function(req, res, next) {
    var criteria = req.params.criteria;
    var organizationsCriteria = {};
    var corpUsersCriteria = {};
    if (criteria) {
        organizationsCriteria = criteriaFactory.organizations(criteria);
        corpUsersCriteria = criteriaFactory.corpUsers(criteria);        
    }
    var search1 = Organizations.findAll(organizationsCriteria);
    var search2 = CorpUser.findAll(corpUsersCriteria);

    Promise.all([search1, search2]).then(values => {
        [organizations, corpUsers] = values;
        res.send({
            organizations: organizations,
            corpUsers: corpUsers
        });
    });
});

module.exports = router;