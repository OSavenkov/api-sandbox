var config = {
    mockDb: false,
    expressPort: 3000,
    allowesOrigins: 'http://localhost:3001',
    db: {
        host: 'kon-dvl-db',
        database: 'KaspiBusiness_Dev',
        username: 'KaspiBusinessUser',
        password: '123'
    }
};

module.exports = config;