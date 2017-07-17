var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var authorize = require('../authorize.js');
var Organizations = require('../model/Organizations.js');
var CorpUser = require('../model/CorpUser.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(authorize('HQ\\Администраторы Kaspi Red'));
router.post('/', function(req, res, next) {

});
router.get('/:criteria', function(req, res, next) {
    var criteria = req.params.criteria;
    var organizationsCriteria = {};
    var corpUsersCriteria = {};
    if (criteria) {
        organizationsCriteria = {
            where: {
                $or: {
                    Idn: {
                        $like: '%' + criteria + '%'
                    },
                    Name: {
                        $like: '%' + criteria + '%'
                    },
                }
            }
        };
        corpUsersCriteria = {
            where: {
                $or: {
                    Idn: {
                        $like: '%' + criteria + '%'
                    },
                    $or: {
                        LastName: {
                            $like: '%' + criteria + '%'
                        },
                        FirstName: {
                            $like: '%' + criteria + '%'
                        },
                        MiddleName: {
                            $like: '%' + criteria + '%'
                        }
                    }
                }
            }
        };
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