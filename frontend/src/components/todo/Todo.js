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
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Faj</th>
              <th>Név</th>
              <th>Kor</th>
              <th>Fajta</th>
              <th>Ivar</th>
              <th>Státusza</th>
            </tr>
          </thead>
          <tbody>
            {allat.map((data, i) => (
              <tr key={i}>
                <td>{data.allatid}</td>
                <td>{data.allatfaj}</td>
                <td>{data.allatnev}</td>
                <td>{data.allatkor}</td>
                <td>{data.allatfajta}</td>
                <td>{data.allativar}</td>
                <td>{data.allatstatusz}</td>
                <td>
                  <div>
                    <Link
                      to={`/update/${data.allatid}`}
                      className="btn btn-success mx-3 w-35"
                    >
                      Módosítás
                    </Link>
                    <button
                      className="btn btn-danger w-35"
                      onClick={() => handleDelete(data.allatid)} // Új sor
                    >
                      Törlés
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tc">
          <Link to="/todo/HozzaadForm" className="btn btn-success w-100">
            Hozzáadás
          </Link>
          <Link to="/" className="btn btn-success mt-2 w-100">
            Kilépés
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Todo;
