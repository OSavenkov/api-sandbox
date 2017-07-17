const config = require('./config.js');
const db = config.db;

var Sequelize, sequelize;

if (config.mockDb) {
    Sequelize = require('sequelize-mock');
    sequelize = new Sequelize();
}
else {
    Sequelize = require('sequelize');
    sequelize = new Sequelize(db.database, db.username, db.password, {
        host: db.host,
        dialect: 'mssql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });
}

module.exports = { sequelize: sequelize }