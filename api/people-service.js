const fs = require('fs');

const basicAuth = require('../basic-auth/basic-auth').digestAuth;

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
    }
    
    getPeople() {
        return this.peoples;
    }
}
