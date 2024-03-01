import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(json());
app.use(cors()); // Use CORS middleware

// Configure MySQL connection
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'karbelatimur19',
  database: 'kost_manager',
  port: 3306
});

connection.connect();

app.post('/api/rooms', (req, res) => {
  const { nomorKamar, hargaPerBulan, isOccupied, ac, kamarMandiDalam } = req.body;
  const sql = 'INSERT INTO rooms (nomorKamar, hargaPerBulan, isOccupied, ac, kamarMandiDalam) VALUES (?, ?, ?, ?, ?)';
  
  connection.query(sql, [nomorKamar, hargaPerBulan, isOccupied, ac, kamarMandiDalam], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error adding room');
    }
    res.status(200).send('Room added successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Make get message when visitted
app.get('/', (req, res) => {
  res.send('Hello World!');
});
