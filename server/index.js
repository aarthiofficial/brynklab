import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/heading', (req, res) => {
  db.get("SELECT text FROM heading WHERE id = 1", (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ heading: row.text });
  });
});

app.post('/heading', (req, res) => {
  const { text } = req.body;
  db.run("UPDATE heading SET text = ? WHERE id = 1", [text], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
