var Organizations = require('../models/Organizations.js');

class OrganizationsRepository {
    findAll(criteria) {
        return Organizations.findAll(criteria);
    }
}

module.exports = OrganizationsRepository;