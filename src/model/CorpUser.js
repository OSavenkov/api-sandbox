const Sequelize = require('sequelize');
var dbContext = require('../dbContext.js');

const CorpUser =
    dbContext.sequelize.define('CorpUser', {
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

module.exports = CorpUser;