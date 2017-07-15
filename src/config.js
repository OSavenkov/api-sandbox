const Sequelize = require('sequelize');
const SequelizeMock = require('sequelize-mock');

const sequelize = new SequelizeMock();
// new Sequelize('KaspiBusiness_Dev', 'KaspiBusinessUser', '123', {
//     host: 'kon-dvl-db',
//     dialect: 'mssql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
// });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

var config = {
    expressPort: 3000,
    sequelize: sequelize
};

module.exports = config;