import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Card from "../Card/Card"

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
          Tekintse meg a menhelyünkön lévő macskákat!
        </h2>
      </div>

      <div className="d-flex justify-content-center my-5">
        {macskak.map((data, i) => (
          <Card data={data} key={i}/>
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
