const config = require('../../config.js');
const Sequelize = require('sequelize');
var dbContext = require('../dbContext.js');

var Organizations;

if (config.mockDb) {
    Organizations = dbContext
        .sequelize
        .define('Organizations', {
            Id: 1,
            Idn: '050864020062',
            Name: 'Google',
        }, {
            timestamps: false
        });
}
else {
    Organizations = dbContext.sequelize.define('Organizations', {
        Id: {
            primaryKey: true,
            type: Sequelize.BIGINT
        },
        Idn: {
            type: Sequelize.STRING
        },
        Name: {
            type: Sequelize.STRING
        }
    }, {
            timestamps: false,
            tableName: 'Organizations'
        });
}

module.exports = Organizations;