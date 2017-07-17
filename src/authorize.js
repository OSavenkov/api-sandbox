var nodeSSPI = require('node-sspi');

function authorize(allowedGroup) {
    return function(req, res, next) {
        req.connection.userGroups.includes(allowedGroup) ?
            next() :
            res.sendStatus(401);
    }
};

module.exports = authorize;