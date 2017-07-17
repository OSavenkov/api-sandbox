var db = require('./config.js').db;
const Sequelize = require('sequelize');
//const SequelizeMock = require('sequelize-mock');

const sequelize =
    //new SequelizeMock();
    new Sequelize(db.database, db.username, db.password, {
        host: db.host,
        dialect: 'mssql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = { sequelize: sequelize }