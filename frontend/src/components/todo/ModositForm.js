import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ModositForm() {
  const [allatnev, setAllatnev] = useState("");
  const [allatfaj, setAllatfaj] = useState("");
  const [allatkor, setAllatkor] = useState("");
  const [allatfajta, setAllatfajta] = useState("");
  const [allativar, setAllativar] = useState("");
  const [allatleiras, setAllatleiras] = useState("");
  const { allatid } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    //Állat adatainak frissítése
    Axios.put("http://localhost:3001/update/" + allatid, {
      allatnev,
      allatfaj,
      allatkor,
      allatfajta,
      allativar,
      allatleiras,
    })
      .then((res) => {
        console.log(res);
        navigate("/todo");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 p-3 br3 w-25">
        <h2 className="tc">Állat adatainak módosítása</h2>
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

          <button className="btn btn-outline-warning w-100 mt-3" type="submit">
            Módosítás
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModositForm;
