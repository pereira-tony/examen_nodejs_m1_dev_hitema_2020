const express = require('express');
const fs = require('fs').promises;
const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use('/api/v1', v1);

v1.get('/people', async (request, response) => {
    try {
        const filesInfo = await peopleService.getPeople();
        response.send(filesInfo);
    } catch(e) {
        console.log('error ocurs ', e);
        response.sendStatus(500);
    }
});


module.exports = app;
