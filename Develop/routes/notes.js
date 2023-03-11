const notes = require('express').Router();
const path = require('path');
const{v4:uuidv4} = require('uuid');
const util = require('util');

//import json file
const database = require('../db/db.json')
const fs = require('fs');

// GET route for retrieving all notes
// router.get('/notes', (req,res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });


// GET Route for a specific note

module.exports = notes;