import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ModositForm() {
  const [allatnev, setAllatnev] = useState("");
  const [allatfaj, setAllatfaj] = useState("");
  const [allatkor, setAllatkor] = useState("");
  const [allatfajta, setAllatfajta] = useState("");
  const [allativar, setAllativar] = useState("");
  const [allatleiras, setAllatleiras] = useState("");
  const { allatid } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    // Fetch the existing data and set the initial state of the input fields
    Axios.get("http://localhost:3001/allatok/" + allatid)
      .then((res) => {
        const { allatnev, allatfaj, allatkor, allatfajta, allativar, allatleiras } = res.data;
        setAllatnev(allatnev);
        setAllatfaj(allatfaj);
        setAllatkor(allatkor);
        setAllatfajta(allatfajta);
        setAllativar(allativar);
        setAllatleiras(allatleiras);
      })
      .catch((err) => console.log(err));
  }, [allatid]);

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
              required
              value={allatnev}
              onChange={(e) => setAllatnev(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Faj:</label>
            <input
              className="form-control"
              type="text"
              required
              value={allatfaj}
              onChange={(e) => setAllatfaj(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Kor:</label>
            <input
              className="form-control"
              type="text"
              required
              value={allatkor}
              onChange={(e) => setAllatkor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Fajta:</label>
            <input
              className="form-control"
              type="text"
              required
              value={allatfajta}
              onChange={(e) => setAllatfajta(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Ivar:</label>
            <input
              className="form-control"
              type="text"
              required
              value={allativar}
              onChange={(e) => setAllativar(e.target.value)}
            />
          </div>
          <div>
            <label>Leírás:</label>
            <textarea
              className="form-control"
              required
              value={allatleiras}
              onChange={(e) => setAllatleiras(e.target.value)}
            />
          </div>

          <button className="btn btn-outline-warning w-100 mt-3" type="submit">
            Módosítás
          </button>
          <Link to="/todo/" className="btn btn-success mt-2 w-100">
            Vissza
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ModositForm;
