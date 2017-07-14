const Sequelize = require('sequelize');
var config = require('../config.js');

const Organization = config.sequelize.define('organization', {
    Name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Organization;