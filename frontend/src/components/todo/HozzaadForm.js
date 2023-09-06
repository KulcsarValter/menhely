import React, { useState } from "react";
import Axios from "axios";

function HozzaadForm() {
  const [allatnev, setAllatnev] = useState("");
  const [allatfaj, setAllatfaj] = useState("");
  const [allatkor, setAllatkor] = useState("");
  const [allatfajta, setAllatfajta] = useState("");
  const [allativar, setAllativar] = useState("");
  const [allatleiras, setAllatleiras] = useState("");
  const [allatKep, setAllatKep] = useState(null);

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
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 p-3 br3 w-25">
        <h2 className="tc">Új állat hozzáadása</h2>
        <form onSubmit={handleSubmit} className="adminform p-3 br3">
          <div className="mb-2">
            <label>Név:</label>
            <input
              className="form-control"
              type="text"
              value={allatnev}
              onChange={(e) => setAllatnev(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Faj:</label>
            <input
              className="form-control"
              type="text"
              value={allatfaj}
              onChange={(e) => setAllatfaj(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Kor:</label>
            <input
              className="form-control"
              type="text"
              value={allatkor}
              onChange={(e) => setAllatkor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Fajta:</label>
            <input
              className="form-control"
              type="text"
              value={allatfajta}
              onChange={(e) => setAllatfajta(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Ivar:</label>
            <input
              className="form-control"
              type="text"
              value={allativar}
              onChange={(e) => setAllativar(e.target.value)}
            />
          </div>
          <div>
            <label>Leírás:</label>
            <textarea
              className="form-control"
              value={allatleiras}
              onChange={(e) => setAllatleiras(e.target.value)}
            />
          </div>
          <div>
            <label className="w-50 mt-2">Kép feltöltése:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          <button className="btn btn-outline-warning w-100 mt-3" type="submit">
            Hozzáadás
          </button>
        </form>
      </div>
    </div>
  );
}

export default HozzaadForm;
