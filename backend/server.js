const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'menhely'
})

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM allatok';
    db.query(sql, (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
})

app.get('/allatok', (req, res) => {
    const sql = 'SELECT * FROM allatok';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {           
            return res.json(data);
        }
    })
})

app.get('/kutyak', (req, res) => {
    let sql = 'SELECT * FROM allatok where allatfaj = "Kutya"';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    })
})

app.get('/macskak', (req, res) => {
    let sql = 'SELECT * FROM allatok where allatfaj = "Macska"';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    })
})

// Állat nevek lekérése
app.get('/availablePetNames', (req, res) => {
    const sql = 'SELECT allatnev FROM allatok';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            const petNames = data.map(item => item.allatnev);
            return res.json(petNames);
        }
    })
})

app.post('/admin', (req, res) => {
    const felhasznalonev = req.body.felhasznalonev;
    const jelszo = req.body.jelszo;

    if (felhasznalonev === 'admin' && jelszo === 'admin') {
        res.json({ message: 'success' });
    } else {
        res.json({ message: 'error' });
    }
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO allatok (allatfaj,allatnev) VALUES (?)";
    const values = [
        req.body.allatfaj, 
        req.body.allatnev  
    ]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.delete('/delete/:allatId', (req, res) => {
    const allatId = req.params.allatId;
    const sql = 'DELETE FROM allatok WHERE allatId = ?';
    db.query(sql, [allatId], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json({ message: 'Sikeres törlés' });
        }
    });
});

app.post('/register', (req, res) => {
    const nev = req.body.nev;
    const email = req.body.email;
    const telefon = req.body.telefon;
    const kisallatnev = req.body.kisallatnev;
  
    db.query(
      'INSERT INTO orokbefogado (nev, email, telefon, kisallatnev) VALUES (?, ?, ?, ?)',
      [nev, email, telefon, kisallatnev],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Sikertelen örökbefogadás' });
        } else {
          res.status(200).send({ message: 'Sikeres Örökbefogadás' });
        }
      }
    );
});

app.listen(3001, () => {
    console.log("App is run 3001 port");
})
