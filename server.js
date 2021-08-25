const express = require ('express');
const fs = require ('fs');
const path = require('path');
const notes = require ("./db/db.json");
const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
