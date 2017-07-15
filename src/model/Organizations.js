var config = require('../config.js');

const Organizations = config
    .sequelize
    .define('organizations', {
        Id: 1,
        Name: 'Google'
    }, {
        timestamps: false
    });

// config .sequelize .define('organization', {     Name: {         type:
// Sequelize.STRING     } }, {timestamps: false});

module.exports = Organizations;