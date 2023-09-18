import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Todo() {
  const [allat, setAllat] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/orokbefogadott")
      .then((res) => setAllat(res.data))
      .catch((err) => console.log(err));
  }, []); // Üres függőséglista, csak a komponens első renderelésekor fut le

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Név</th>
              <th>Kor</th>
              <th>Fajta</th>
              <th>Ivar</th>
            </tr>
          </thead>
          <tbody>
            {allat.map((data, i) => (
              <tr key={i}>
                <td>{data.allatnev}</td>
                <td>{data.allatkor} éves</td>
                <td>{data.allatfajta}</td>
                <td>{data.allativar}</td>
                <td>
                  <div></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tc">
          <Link to="/" className="btn btn-success mt-2 w-100">
            Kilépés
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Todo;
