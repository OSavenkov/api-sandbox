var nodeSSPI = require('node-sspi');

function authorize(allowedGroup) {
    return function (req, res, next) {
        if (req.connection.userGroups.includes(allowedGroup)) {
            next();
        } else {
            console.log(allowedGroup);
            console.log(req.connection.userGroups);
            res.sendStatus(401);
        }
    };
}

module.exports = authorize;