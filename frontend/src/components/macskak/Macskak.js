import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";

function Macskak() {
  const [macskak, setMacskak] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/macskak")
      .then((res) => setMacskak(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-center">
          Tekintse meg a menhelyünkön lévő kutyákat és macskákat!
        </h2>
      </div>
      <div className="d-flex justify-content-center my-5">
        {macskak.map((data, i) => (
          <div className="pa1 kartyak grow ma1 br2 my-5" key={i}>
            {data.allatkep && (
              <img
                src={`http://localhost:3001/${data.allatkep}`}
                height={200}
                width={300}
                alt={data.allatnev}
              />
            )}
            <p>Állat neve: {data.allatnev}</p>
            <p>Faj: {data.allatfaj}</p>
            <p>Fajta: {data.allatfajta}</p>
            <p>Neme: {data.allativar}</p>
            <p>Kora: {data.allatkor} éves</p>
            <p>Leírás: {data.allatleiras}</p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Link
          to="/orokbefogadas"
          className="d-flex justify-content-center btn btn-outline-info"
        >
          Örökbefogadás
        </Link>
      </div>
    </div>
  );
}

export default Macskak;
