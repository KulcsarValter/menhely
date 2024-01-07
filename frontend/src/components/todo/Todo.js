import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Todo() {
  const [allat, setAllat] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then((res) => setAllat(res.data))
      .catch((err) => console.log(err));
  }, []); // Üres függőséglista, csak a komponens első renderelésekor fut le

  function handleDelete(allatid) {
    Axios.delete(`http://localhost:3001/delete/${allatid}`)
      .then((res) => {
        console.log(res.data.message);
        // Állatok frissítése
        Axios.get("http://localhost:3001/")
          .then((res) => setAllat(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="bg-white w-50 rounded p-3">
        <div className="fw-bold d-flex justify-content-between">
          <p>Id</p>
          <p>Faj</p>
          <p>Név</p>
          <p>Kor</p>
          <p>Fajta</p>
          <p>Ivar</p>
          <p>Státusza</p>
        </div>
        <hr></hr>

        <div>
          {allat.map((data, i) => (
            <div key={i}>
              <div className="d-flex flex-wrap justify-content-between">
                <p>{data.allatid}</p>
                <p>{data.allatfaj}</p>
                <p>{data.allatnev}</p>
                <p>{data.allatkor} éves</p>
                <p>{data.allatfajta}</p>
                <p>{data.allativar}</p>
                <p>{data.allatstatusz}</p>
              </div>

              <div className="d-flex flex-wrap justify-content-between">
                <div className="w-40">
                  <Link
                    to={`/update/${data.allatid}`}
                    className="btn btn-success  w-100"
                  >
                    Módosítás
                  </Link>
                </div>
                <div className="w-40">
                  <button
                    className="btn btn-danger mr w-100"
                    onClick={() => handleDelete(data.allatid)} // Új sor
                  >
                    Törlés
                  </button>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>

        <div className="tc">
          <div>
            <Link
              to="/todo/HozzaadForm"
              className="pa2 bg-green link ba br2 db w-100 mb2 hover-yellow hover-bg-dark-green"
            >
              Hozzáadás
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="pa2 bg-light-blue link ba br2 db w-100 hover-yellow hover-bg-dark-blue"
            >
              Kilépés
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
