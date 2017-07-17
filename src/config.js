var config = {
    mockDb: true,
    expressPort: 3000,
    allowesOrigins: '*',
    db: {
        host: 'kon-dvl-db',
        database: 'KaspiBusiness_Dev',
        username: 'KaspiBusinessUser',
        password: '123'
    }
};

module.exports = config;