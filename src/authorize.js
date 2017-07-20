var nodeSSPI = require('node-sspi');

function authorize(allowedGroup) {
    return function(req, res, next) {
        if (req.connection.userGroups.includes(allowedGroup)) {
            next();
        } else {
            console.log(allowedGroup);
            console.log(req.connection.userGroups);
            console.log(req.connection.userGroups[13] == allowedGroup);
            res.sendStatus(401);
        }
    };
}

module.exports = authorize;