var config = require('../config.js');

const Organization = config.sequelize
.define('organization', {
    Id : 1,
    Name : 'Google'
},
{timestamps: false});

//config
//     .sequelize
//     .define('organization', {
//         Name: {
//             type: Sequelize.STRING
//         }
//     }, {timestamps: false});

module.exports = Organization;