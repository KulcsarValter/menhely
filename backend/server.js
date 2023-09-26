const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Képfeltöltés beállítása a "public" mappába
const storage = multer.diskStorage({
  destination: "public/images",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "menhely",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM allatok";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/allatok", (req, res) => {
  const sql = "SELECT * FROM allatok";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/kutyak", (req, res) => {
  let sql = 'SELECT * FROM allatok where allatfaj = "Kutya"';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/macskak", (req, res) => {
  let sql = 'SELECT * FROM allatok where allatfaj = "Macska"';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/availablePetNames", (req, res) => {
  const sql = "SELECT allatnev FROM allatok WHERE allatstatusz = 0" ;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      const petNames = data.map((item) => item.allatnev);
      return res.json(petNames);
    }
  });
});

app.post("/admin", (req, res) => {
  const felhasznalonev = req.body.felhasznalonev;
  const jelszo = req.body.jelszo;

  if (felhasznalonev === "admin" && jelszo === "admin") {
    res.json({ message: "success" });
  } else {
    res.json({ message: "error" });
  }
});

app.post("/create", upload.single("allatKep"), (req, res) => {
  // Kép elérési útvonala
  const allatKepPath = req.file ? "public/images/" + req.file.filename : null;

  const sql =
    "INSERT INTO allatok (allatfaj, allatnev, allatkor, allatfajta, allativar, allatleiras, allatkep) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.allatfaj,
    req.body.allatnev,
    req.body.allatkor,
    req.body.allatfajta,
    req.body.allativar,
    req.body.allatleiras,
    allatKepPath, // Kép elérési útvonala
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Hozzáadás hiba" });
    }

    return res.json({ message: "Hozzáadás sikeres" });
  });
});

app.put("/update/:allatid", (req, res) => {
  const sql =
    "UPDATE allatok set `allatfaj` = ?, `allatnev` = ?,   `allatkor` = ?, `allatfajta` = ?, `allativar` = ?, `allatleiras` = ? WHERE allatid = ?";
  const values = [
    req.body.allatfaj,
    req.body.allatnev,
    req.body.allatkor,
    req.body.allatfajta,
    req.body.allativar,
    req.body.allatleiras,
  ];
  const allatid = req.params.allatid;
  db.query(sql, [...values, allatid], (err, data) => {
    if (err) {
      return res.json(error);
    } else {
      return res.json(data);
    }
  });
});

app.delete("/delete/:allatid", (req, res) => {
  const allatid = req.params.allatid;
  const sql = "DELETE FROM allatok WHERE allatid = ?";
  db.query(sql, [allatid], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({ message: "Sikeres törlés" });
    }
  });
});

app.post("/register", (req, res) => {
  const nev = req.body.nev;
  const email = req.body.email;
  const telefon = req.body.telefon;
  const kisallatnev = req.body.kisallatnev;

  db.query(
    "INSERT INTO orokbefogado (nev, email, telefon, kisallatnev) VALUES (?, ?, ?, ?)",
    [nev, email, telefon, kisallatnev],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Sikertelen örökbefogadás" });
      } else {
        res.status(200).send({ message: "Sikeres Örökbefogadás", insertid: result.insertId });
      }
    }
  );
});

app.put("/updateStatus/:allatid", (req, res) => {
  const allatid = req.params.allatid;
  const sql = "UPDATE allatok SET allatstatusz = 1 WHERE allatid = ?";
  db.query(sql, [allatid], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({ message: "Sikeres állatstátusz frissítés" });
    }
  });
});

app.put("/orokbefogadott/:allatid", (req, res) => {
  const allatid = req.body.allatid;
  const orokbefogadoid = req.body.orokbefogadoid;
  const allatnev = req.body.allatnev;

  db.query(
    "INSERT INTO orokbefogadott (allatid, orokbefogadoid, allatnev) VALUES (?, ?, ?)",
    [allatid, orokbefogadoid, allatnev],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Sikertelen örökbefogadás" });
      } else {
        res.status(200).send({ message: "Sikeres Örökbefogadás" });
      }
    }
  );
});

app.get("/orokbefogadott", (req, res) => {
  let sql = "SELECT * FROM allatok where allatstatusz = 1";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/allatok/:allatnev", (req, res) => {
  const allatnev = req.params.allatnev;
  const sql = "SELECT * FROM allatok WHERE allatnev = ?";
  db.query(sql, [allatnev], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3001, () => {
  console.log("App is running on port 3001");
});
