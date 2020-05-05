const express = require('express');
const fs = require('fs').promises;
const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use('/api/v1', v1);

v1.get('/people', async (request, response) => {
    const filter = request.query;
    return response.send(peopleService.getPeople(filter));
});


module.exports = app;
