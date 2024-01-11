import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const AdminForm = () => {
  const [felhasznalonev, setfelhasznalonev] = useState("");
  const [jelszo, setJelszo] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/admin", {
      felhasznalonev: felhasznalonev,
      jelszo: jelszo,
    }).then((response) => {
      if (response.data.message === "success") {
        setLoginStatus("Sikeres bejelentkezés!");
        // Sikeres bejelentkezés esetén átirányítás a Todo oldalra
        window.location.href = "/todo";
      } else {
        setLoginStatus("Hibás felhasználónév vagy jelszó");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="mt-5 p-3 br3 w-25">
          <h2 className="tc">Admin</h2>
          <form onSubmit={login} className="adminform p-3 br3">
            <div className="mb-3">
              <label htmlFor="adminNev">Név</label>
              <input
                type="text"
                className="form-control br-3"
                required
                value={felhasznalonev}
                onChange={(e) => {
                  setfelhasznalonev(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="adminJelszo">Jelszó</label>
              <input
                type="password"
                className="form-control"
                required
                value={jelszo}
                onChange={(e) => {
                  setJelszo(e.target.value);
                }}
              />
            </div>
            <p></p>

            <button
              type="submit"
              className="btn btn-outline-warning w-100 grow"
            >
              Bejelentkezés
            </button>
            <h1
              style={{
                color: "red",
                fontSize: "15px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {loginStatus}
            </h1>
            <p></p>
            <Link to="/" className="btn btn-outline-warning w-100 grow">
              Vissza
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
