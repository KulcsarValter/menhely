import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Card from "../Card/Card";

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
      <div className="d-flex flex-wrap justify-content-center border-2 mt-5">
        {macskak.map((data, i) => (
          <Card data={data} key={i} />
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5">
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
