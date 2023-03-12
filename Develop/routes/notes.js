const notes = require('express').Router();
const path = require('path');
const{v4:uuid4} = require('uuid');

const fs = require('fs');


notes.get('/notes', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        if (err) console.log(err);
        return res.json(JSON.parse(data));
    });
});

notes.post('/notes', (req, res) => {
    console.log('here');
    if(req.body) {
        const {title, text } = req.body;
        const newNote = {
            title,
            text,
            id: uuid4(),
        };
        fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
            console.log(data);
            let newData = JSON.parse(data)
            console.log('New Data', newData);
            newData.push(newNote)
            let changedData = JSON.stringify(newData)

            fs.writeFile(path.resolve(__dirname, '..', 'db/db.json'), changedData, (err) => {
                console.log(err);
                return res.json();
            })
        })
    }
});

module.exports = notes;