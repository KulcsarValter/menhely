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

app.post('/admin', (req, res) => {
    const felhasznalonev = req.body.felhasznalonev;
    const jelszo = req.body.jelszo;

    db.query('SELECT felhasznalonev,jelszo FROM `admin` WHERE felhasznalonev="admin" AND jelszo="admin"', [felhasznalonev, jelszo],
        (err, result) => {
            if (err) {
                req.setEncoding({ err: err })
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send("Hibás felhasználónév vagy jelszó");
                }
            }
        }
    )
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO allatok (allatfaj,allatnev) VALUES (?)";
    const values = [
        req.body.allatfaj, 
        req.body.allatnev  
    ]
    db.query(sql, [values], (err, res) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post('/register', (req, res) => {
    const nev = req.body.nev;
    const email = req.body.email;
    const telefon = req.body.telefon;
    const kisallatnev = req.body.kisallatnev;

    db.query('INSERT INTO orokbefogado (nev,email,telefon) VALUES (?,?,?)', [nev, email, telefon],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Sikertelen" })
            }
        })
})

app.listen(3001, () => {
    console.log("App is run 3001 port");
})
