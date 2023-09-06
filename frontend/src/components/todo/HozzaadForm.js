import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate importálása

function HozzaadForm() {
  const [allatnev, setAllatnev] = useState("");
  const [allatfaj, setAllatfaj] = useState("");
  const [allatkor, setAllatkor] = useState("");
  const [allatfajta, setAllatfajta] = useState("");
  const [allativar, setAllativar] = useState("");
  const [allatleiras, setAllatleiras] = useState("");
  const [allatKep, setAllatKep] = useState(null);
  
  const navigate = useNavigate(); // useNavigate használata

  // Kép feltöltés kezelése
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setAllatKep(file);
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Kép feltöltés a FormData segítségével
    const formData = new FormData();
    formData.append("allatnev", allatnev);
    formData.append("allatfaj", allatfaj);
    formData.append("allatkor", allatkor);
    formData.append("allatfajta", allatfajta);
    formData.append("allativar", allativar);
    formData.append("allatleiras", allatleiras);
    formData.append("allatKep", allatKep); // Kép hozzáadása

    // Új állat hozzáadásának szerveroldali kérése
    Axios.post("http://localhost:3001/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Fontos: multipart form adatok küldése
      },
    })
      .then((res) => {
        console.log(res.data);
        // Állatok frissítése (opcionális)

        // Sikeres hozzáadás után átirányítás a "todo" oldalra
        navigate('/todo');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2>Új állat hozzáadása</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Név:</label>
          <input
            type="text"
            value={allatnev}
            onChange={(e) => setAllatnev(e.target.value)}
          />
        </div>
        <div>
          <label>Faj:</label>
          <input
            type="text"
            value={allatfaj}
            onChange={(e) => setAllatfaj(e.target.value)}
          />
        </div>
        <div>
          <label>Kor:</label>
          <input
            type="text"
            value={allatkor}
            onChange={(e) => setAllatkor(e.target.value)}
          />
        </div>
        <div>
          <label>Fajta:</label>
          <input
            type="text"
            value={allatfajta}
            onChange={(e) => setAllatfajta(e.target.value)}
          />
        </div>
        <div>
          <label>Ivar:</label>
          <input
            type="text"
            value={allativar}
            onChange={(e) => setAllativar(e.target.value)}
          />
        </div>
        <div>
          <label>Leírás:</label>
          <textarea
            value={allatleiras}
            onChange={(e) => setAllatleiras(e.target.value)}
          />
        </div>
        <div>
          <label>Kép feltöltése:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
}

export default HozzaadForm;
