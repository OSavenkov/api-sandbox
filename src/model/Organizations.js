const Sequelize = require('sequelize');
var dbContext = require('../dbContext.js');

const Organizations =
    // config
    // .sequelize
    // .define('organizations', {
    //     Id: 1,
    //     Idn: '050864020062'
    //     Name: 'Google',
    // }, {
    //     timestamps: false
    // });

    dbContext.sequelize.define('Organizations', {
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

module.exports = Organizations;