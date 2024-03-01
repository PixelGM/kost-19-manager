const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kost_manager',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/api/rooms', (req, res) => {
    const room = req.body;
    const query = 'INSERT INTO rooms SET ?';
    db.query(query, room, (err, result) => {
        if (err) throw err;
        res.send('Room added');
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));