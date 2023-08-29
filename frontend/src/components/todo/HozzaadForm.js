import React, { useState } from "react";
import Axios from "axios";

function HozzaadForm() {
  const [allatnev, setAllatnev] = useState("");
  const [allatfaj, setAllatfaj] = useState("");
  const [allatkor, setAllatkor] = useState("");
  const [allatfajta, setAllatfajta] = useState("");
  const [allativar, setAllativar] = useState("");
  const [allatleiras, setAllatleiras] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Új állat hozzáadásának szerveroldali kérése
    Axios.post("http://localhost:3001/create", {
      allatnev,
      allatfaj,
      allatkor,
      allatfajta,
      allativar,
      allatleiras,
    })
      .then((res) => {
        console.log(res.data);
        // Állatok frissítése (opcionális)
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
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
}

export default HozzaadForm;
