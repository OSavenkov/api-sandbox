var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var authorize = require('../authorize.js');
var criteriaFactory = require('../data/criteriaFactory.js');
var OrganizationsRepository = require('../data/repositories/OrganizationsRepository.js');
var CorpUser = require('../data/models/CorpUser.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(authorize('\\ЛОКАЛЬНЫЕ'));
// router.use(authorize('\\Everyone'));
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
    var search1 = (new OrganizationsRepository).findAll(organizationsCriteria);
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