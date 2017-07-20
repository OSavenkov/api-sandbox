const config = require('../../config.js');
const Sequelize = require('sequelize');
var dbContext = require('../dbContext.js');

var CorpUser;
if (config.mockDb) {
    CorpUser = dbContext.sequelize.define('CorpUser', {
        Id: 1,
        Idn: '123456789012',
        LastName: 'Oleg',
        FirstName: 'Savenkov',
        MiddleName: ''
    }
    );
} else {
    CorpUser = dbContext.sequelize.define('CorpUser', {
        Id: {
            primaryKey: true,
            type: Sequelize.BIGINT
        },
        Idn: {
            type: Sequelize.STRING
        },
        LastName: {
            type: Sequelize.STRING
        },
        FirstName: {
            type: Sequelize.STRING
        },
        MiddleName: {
            type: Sequelize.STRING
        }
    }, {
            timestamps: false,
            tableName: 'CorpUser'
        });
}

module.exports = CorpUser;